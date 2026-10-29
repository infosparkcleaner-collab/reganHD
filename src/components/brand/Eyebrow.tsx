export function Eyebrow({ children, dark = false, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return <p className={`eyebrow ${dark ? "text-steel-300" : "text-steel-500"} ${className}`}>{children}</p>;
}
