"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { skus } from "@/content/site";

const field =
  "mt-1.5 w-full border border-[#66759A] bg-white px-3 py-3 text-base text-navy focus:border-regan-blue focus:outline-none focus:ring-2 focus:ring-regan-blue";
const bad = "border-regan-red ring-1 ring-regan-red";

type Status = { state: "idle" } | { state: "sending" } | { state: "sent"; delivered: boolean } | { state: "error"; message: string; fields: string[] };

export function QuoteForm() {
  const params = useSearchParams();
  const sku = params.get("sku") ?? "";
  const type = params.get("type") ?? "new";
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const errs = status.state === "error" ? status.fields : [];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const qty = String(f.get("qty") ?? "").trim();
    const payload = {
      name: f.get("name"),
      company: f.get("company"),
      email: f.get("email"),
      phone: f.get("phone"),
      type: f.get("type"),
      sku: f.get("sku"),
      qty: qty ? Number(qty) : undefined,
      cores: f.get("cores"),
      details: f.get("details"),
      website: f.get("website"),
    };
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) setStatus({ state: "sent", delivered: !!data.delivered });
      else setStatus({ state: "error", message: data.error ?? "Something went wrong. Please try again.", fields: data.fields ?? [] });
    } catch {
      setStatus({ state: "error", message: "We could not reach the server. Check your connection and try again.", fields: [] });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="border-l-4 border-regan-red py-2 pl-4 text-lg">
        {status.delivered ? (
          <p>Quote request sent. We&apos;ll reply by email.</p>
        ) : (
          <p>Thanks. This demo form is not connected to email yet, so your request was not sent. Please call or email us directly.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {status.state === "error" && (
        <p role="alert" className="border-l-4 border-regan-red bg-regan-red/10 p-3 text-sm font-medium sm:col-span-2">
          {status.message}
        </p>
      )}
      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="text-sm font-medium">
        Name
        <input required name="name" autoComplete="name" className={`${field} ${errs.includes("name") ? bad : ""}`} />
      </label>
      <label className="text-sm font-medium">
        Company
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="text-sm font-medium">
        Email
        <input required type="email" name="email" autoComplete="email" className={`${field} ${errs.includes("email") ? bad : ""}`} />
      </label>
      <label className="text-sm font-medium">
        Phone
        <input type="tel" name="phone" autoComplete="tel" className={field} />
      </label>
      <label className="text-sm font-medium">
        I need
        <select key={type} name="type" className={field} defaultValue={type}>
          <option value="new">New Marathon parts</option>
          <option value="refurbish">Brake shoe refurbishing</option>
          <option value="other">Something else</option>
        </select>
      </label>
      <label className="text-sm font-medium">
        Part number
        <select key={sku} name="sku" className={field} defaultValue={sku}>
          <option value="">Not sure yet</option>
          {skus.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium">
        Quantity
        <input name="qty" type="number" inputMode="numeric" min={1} max={100000} className={`${field} ${errs.includes("qty") ? bad : ""}`} />
      </label>
      <label className="text-sm font-medium">
        Cores for refurbishing
        <select name="cores" className={field} defaultValue="none">
          <option value="none">No cores yet</option>
          <option value="some">Some cores on hand</option>
          <option value="ready">Cores ready to ship</option>
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Details
        <textarea name="details" rows={4} className={field} />
      </label>
      <button
        type="submit"
        disabled={status.state === "sending"}
        className="bg-regan-red px-7 py-4 font-display text-lg font-semibold text-white hover:bg-navy disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
      >
        {status.state === "sending" ? "Sending..." : "Send quote request"}
      </button>
    </form>
  );
}
