"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { skus } from "@/content/site";

const field =
  "mt-1.5 w-full border border-ink/25 bg-white px-3 py-3 text-base text-ink focus:border-regan-red focus:outline-none focus:ring-2 focus:ring-regan-red/30";

export function QuoteForm() {
  const params = useSearchParams();
  const [sent, setSent] = useState(false);
  const sku = params.get("sku") ?? "";
  const type = params.get("type") ?? "new";

  // TODO: wire to email/CRM once the client picks a destination.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="quote" className="relative scroll-mt-4 overflow-clip bg-[#080b14] text-white">
      <div className="stripes pointer-events-none absolute inset-y-0 right-0 w-1/2 text-white/[0.03]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.15fr] lg:py-28">
        <div>
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">Request a quote</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
            Tell us the part number or what you need rebuilt. We&apos;ll reply with price and availability.
          </p>
        </div>
        <div className="cut-corner bg-white p-6 text-ink sm:p-8">
          {sent ? (
            <p role="status" className="border-l-4 border-regan-red py-2 pl-4 text-lg">
              Quote request sent. We&apos;ll reply by email.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Name
                <input required name="name" autoComplete="name" className={field} />
              </label>
              <label className="text-sm font-medium">
                Company
                <input name="company" autoComplete="organization" className={field} />
              </label>
              <label className="text-sm font-medium">
                Email
                <input required type="email" name="email" autoComplete="email" className={field} />
              </label>
              <label className="text-sm font-medium">
                Phone
                <input type="tel" name="phone" autoComplete="tel" className={field} />
              </label>
              <label className="text-sm font-medium">
                I need
                <select key={type} name="type" className={field} defaultValue={type}>
                  <option value="new">New Marathon parts</option>
                  <option value="refurbish">Brake refurbishing</option>
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
              <label className="text-sm font-medium sm:col-span-2">
                Details
                <textarea name="details" rows={4} className={field} />
              </label>
              <button
                type="submit"
                className="cut-corner bg-regan-red px-7 py-4 font-display text-lg font-semibold text-white hover:bg-ink sm:col-span-2 sm:justify-self-start"
              >
                Send quote request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
