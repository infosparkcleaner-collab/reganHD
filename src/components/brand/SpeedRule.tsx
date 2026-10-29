/** Two skewed bars ending in three short dashes, lifted from the Regan HD logo. Use sparingly. */
export function SpeedRule({ className = "", width = 120 }: { className?: string; width?: number }) {
  return (
    <svg viewBox="0 0 120 12" width={width} height={(width / 120) * 12} className={className} aria-hidden fill="currentColor">
      <polygon points="1,3 2,0 86,0 85,3" />
      <polygon points="91,3 92,0 99,0 98,3" />
      <polygon points="103,3 104,0 109,0 108,3" />
      <polygon points="113,3 114,0 117,0 116,3" />
      <polygon points="0,11 1,8 86,8 85,11" />
      <polygon points="90,11 91,8 98,8 97,11" />
      <polygon points="102,11 103,8 108,8 107,11" />
      <polygon points="112,11 113,8 116,8 115,11" />
    </svg>
  );
}
