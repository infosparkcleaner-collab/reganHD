"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { skus } from "@/content/site";

const field =
  "mt-1 w-full border border-ink/30 bg-white px-3 py-3 text-base text-ink focus:border-regan-red focus:outline-none focus:ring-2 focus:ring-regan-red/30";

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
    <section id="quote" className="scroll-mt-16 bg-steel">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:py-20">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Request a quote</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Tell us the part number or what you need rebuilt. We&apos;ll reply with price and availability.
          </p>
        </div>
        {sent ? (
          <p role="status" className="border-l-4 border-regan-red bg-white p-6 text-lg text-ink">
            Quote request sent. We&apos;ll reply by email.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-ink">
              Name
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="text-sm font-medium text-ink">
              Company
              <input name="company" autoComplete="organization" className={field} />
            </label>
            <label className="text-sm font-medium text-ink">
              Email
              <input required type="email" name="email" autoComplete="email" className={field} />
            </label>
            <label className="text-sm font-medium text-ink">
              Phone
              <input type="tel" name="phone" autoComplete="tel" className={field} />
            </label>
            <label className="text-sm font-medium text-ink">
              I need
              <select key={type} name="type" className={field} defaultValue={type}>
                <option value="new">New Marathon parts</option>
                <option value="refurbish">Brake refurbishing</option>
                <option value="other">Something else</option>
              </select>
            </label>
            <label className="text-sm font-medium text-ink">
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
            <label className="text-sm font-medium text-ink sm:col-span-2">
              Details
              <textarea name="details" rows={4} className={field} />
            </label>
            <button
              type="submit"
              className="cut-corner bg-regan-red px-6 py-3.5 font-display font-semibold text-white hover:bg-ink sm:col-span-2 sm:justify-self-start"
            >
              Send quote request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
