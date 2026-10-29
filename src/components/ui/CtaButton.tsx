import Link from "next/link";

/** The one red button on the site: primary action only. */
export function CtaButton({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`inline-flex h-12 items-center rounded-sm bg-regan-red px-6 font-semibold text-white hover:bg-regan-red-dark ${className}`}>
      {children}
    </Link>
  );
}
