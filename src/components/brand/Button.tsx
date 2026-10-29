import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "link" | "linkDark";

const base = "inline-flex items-center justify-center gap-2 font-semibold text-[15px] transition-colors duration-200";
const styles: Record<Variant, string> = {
  primary: `${base} h-12 rounded-[2px] px-6 bg-red-600 text-white hover:bg-red-700`,
  secondary: `${base} h-12 rounded-[2px] px-6 border border-text text-text hover:bg-text hover:text-white`,
  ghost: `${base} h-12 rounded-[2px] px-6 border border-white/30 text-white hover:bg-white/10 hover:border-white`,
  link: `${base} text-blue-600`,
  linkDark: `${base} text-blue-400`,
};

export function Button({ href, children, variant = "primary", className = "" }: { href: string; children: React.ReactNode; variant?: Variant; className?: string }) {
  return (
    <Link href={href} className={`${styles[variant]} ${className}`}>
      <span className={variant.startsWith("link") ? "ulink" : ""}>{children}</span>
      <span className="arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}
