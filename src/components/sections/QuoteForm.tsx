"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { skus } from "@/content/site";

const field =
  "mt-2 h-12 w-full rounded-[2px] border border-steel-200 bg-white px-3.5 text-[16px] text-text transition-[border-color,box-shadow] focus:border-blue-600 focus:outline-none focus:shadow-[0_0_0_3px_rgba(23,64,154,0.15)]";
const bad = "border-red-600 shadow-[0_0_0_3px_rgba(200,16,46,0.12)]";

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
      <div role="status" className="border-l-4 border-red-600 py-2 pl-4 text-lg">
        {status.delivered ? (
          <p>Quote request sent. We&apos;ll reply by email.</p>
        ) : (
          <p>Thanks. This demo form is not connected to email yet, so your request was not sent. Please call or email us directly.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <h2 className="text-[1.5rem] font-bold tracking-[-0.015em] sm:col-span-2">Quote request</h2>
      {status.state === "error" && (
        <p role="alert" className="border-l-4 border-red-600 bg-red-600/5 p-3 text-sm font-medium sm:col-span-2">
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
      <label className="text-[14px] font-medium text-text">
        Name
        <input required name="name" autoComplete="name" className={`${field} ${errs.includes("name") ? bad : ""}`} />
      </label>
      <label className="text-[14px] font-medium text-text">
        Company
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="text-[14px] font-medium text-text">
        Email
        <input required type="email" name="email" autoComplete="email" className={`${field} ${errs.includes("email") ? bad : ""}`} />
      </label>
      <label className="text-[14px] font-medium text-text">
        Phone
        <input type="tel" name="phone" autoComplete="tel" className={field} />
      </label>
      <label className="text-[14px] font-medium text-text">
        I need
        <select key={type} name="type" className={field} defaultValue={type}>
          <option value="new">New Marathon parts</option>
          <option value="refurbish">Brake shoe refurbishing</option>
          <option value="other">Something else</option>
        </select>
      </label>
      <label className="text-[14px] font-medium text-text">
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
      <label className="text-[14px] font-medium text-text">
        Quantity
        <input name="qty" type="number" inputMode="numeric" min={1} max={100000} className={`${field} ${errs.includes("qty") ? bad : ""}`} />
      </label>
      <label className="text-[14px] font-medium text-text">
        Cores for refurbishing
        <select name="cores" className={field} defaultValue="none">
          <option value="none">No cores yet</option>
          <option value="some">Some cores on hand</option>
          <option value="ready">Cores ready to ship</option>
        </select>
      </label>
      <label className="text-[14px] font-medium text-text sm:col-span-2">
        Details
        <textarea name="details" rows={4} className={`${field} h-auto py-3 font-mono text-[15px]`} placeholder="Part numbers, quantities, cores on hand..." />
      </label>
      <button
        type="submit"
        disabled={status.state === "sending"}
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-[2px] bg-red-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-60 sm:col-span-2"
      >
        {status.state === "sending" ? "Sending..." : <>Send quote request <span className="arrow" aria-hidden>→</span></>}
      </button>
    </form>
  );
}
