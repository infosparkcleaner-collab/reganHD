import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  type: z.enum(["new", "refurbish", "other"]),
  sku: z.string().trim().max(10).optional().default(""),
  qty: z.number().int().min(1).max(100000).optional(),
  cores: z.enum(["none", "some", "ready"]).optional().default("none"),
  details: z.string().trim().max(2000).optional().default(""),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().max(500).optional().default(""),
});

const TYPE = { new: "New Marathon parts", refurbish: "Brake shoe refurbishing", other: "Something else" } as const;
const CORES = { none: "No cores yet", some: "Some cores on hand", ready: "Cores ready to ship" } as const;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const fields = [...new Set(parsed.error.issues.map((i) => String(i.path[0])))];
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", fields }, { status: 422 });
  }
  const q = parsed.data;

  // Bots get a friendly answer and nothing is sent.
  if (q.website) return NextResponse.json({ ok: true, delivered: false });

  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;
  if (!key || !to || !from) {
    console.warn("[quote] Email is not configured (see .env.example). Request was NOT delivered.");
    return NextResponse.json({ ok: true, delivered: false });
  }

  const text = [
    `Name: ${q.name}`,
    `Company: ${q.company || "-"}`,
    `Email: ${q.email}`,
    `Phone: ${q.phone || "-"}`,
    `Needs: ${TYPE[q.type]}`,
    `Part number: ${q.sku || "-"}`,
    `Quantity: ${q.qty ?? "-"}`,
    `Cores: ${CORES[q.cores]}`,
    "",
    q.details || "(no details)",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: q.email, subject: `Quote request: ${q.name}${q.sku ? ` (${q.sku})` : ""}`, text }),
  }).catch(() => null);

  if (!res || !res.ok) {
    return NextResponse.json({ ok: false, error: "We could not send your request. Please call or email us instead." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
