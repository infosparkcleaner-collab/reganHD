"use client";

import { useId } from "react";
import { motion, type MotionValue } from "motion/react";

export type Condition = "new" | "worn";

const C = 210; // center of the 420 viewBox

const polar = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
};

/** Annular sector path, used for the caliper body. */
function sector(rIn: number, rOut: number, from: number, to: number) {
  const [x1, y1] = polar(rOut, from);
  const [x2, y2] = polar(rOut, to);
  const [x3, y3] = polar(rIn, to);
  const [x4, y4] = polar(rIn, from);
  return `M${x1} ${y1} A${rOut} ${rOut} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${rIn} ${rIn} 0 0 0 ${x4} ${y4} Z`;
}

function RotorFace({ condition }: { condition: Condition }) {
  const id = useId();
  const worn = condition === "worn";
  return (
    <svg viewBox="0 0 420 420" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id={`disc${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="45%" stopColor={worn ? "#2b2a29" : "#232a39"} />
          <stop offset="82%" stopColor={worn ? "#3a332f" : "#323a4c"} />
          <stop offset="100%" stopColor="#151a25" />
        </radialGradient>
        <radialGradient id={`rust${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9a4a1f" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#6b2f12" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={C} cy={C} r="190" fill={`url(#disc${id})`} />
      <circle cx={C} cy={C} r="190" fill="none" stroke="#566178" strokeWidth="2" />
      {[118, 134, 150, 166, 182].map((r) => (
        <circle key={r} cx={C} cy={C} r={r} fill="none" stroke="#ffffff" strokeOpacity={worn ? 0.1 : 0.05} />
      ))}
      {Array.from({ length: 40 }).map((_, i) => (
        <rect key={i} x={C - 3} y={C - 176} width="6" height="44" rx="3" fill="#06080d" transform={`rotate(${i * 9} ${C} ${C})`} />
      ))}
      <circle cx={C} cy={C} r="104" fill="#1a2030" stroke="#3a4358" strokeWidth="2" />
      <circle cx={C} cy={C} r="70" fill="#141926" stroke="#2b3345" strokeWidth="2" />
      {Array.from({ length: 10 }).map((_, i) => {
        const [x, y] = polar(88, i * 36);
        return <circle key={i} cx={x} cy={y} r="7" fill="#06080d" stroke="#4a5468" strokeWidth="1.5" />;
      })}
      <circle cx={C} cy={C} r="28" fill="#07090e" stroke="#4a5468" strokeWidth="2" />
      {/* Paint mark: makes rotation readable at low speed */}
      <circle cx={C} cy={C - 52} r="5" fill="#d30d1f" />
      {worn && (
        <g>
          {[
            [120, 150, 46],
            [300, 130, 38],
            [330, 290, 52],
            [150, 310, 40],
            [220, 70, 30],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill={`url(#rust${id})`} />
          ))}
          <circle cx={C} cy={C} r="158" fill="none" stroke="#7a3b1a" strokeWidth="3" strokeOpacity="0.55" strokeDasharray="22 40 8 70" />
          <circle cx={C} cy={C} r="174" fill="none" stroke="#000" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="60 30 4 90" />
          <path d="M318 152 l-14 18 l8 12 l-16 20 l6 14" fill="none" stroke="#0a0b0f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
    </svg>
  );
}

function Caliper({ condition }: { condition: Condition }) {
  const id = useId();
  const worn = condition === "worn";
  const [cx, cy] = polar(158, 0);
  return (
    <svg viewBox="0 0 420 420" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={`cal${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={worn ? "#7d4a3a" : "#ec2233"} />
          <stop offset="100%" stopColor={worn ? "#4b2a22" : "#8f0713"} />
        </linearGradient>
      </defs>
      <path
        d={sector(112, 204, -27, 27)}
        fill={`url(#cal${id})`}
        stroke={worn ? "#3a2018" : "#5c0510"}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d={sector(118, 198, -24, 24)} fill="none" stroke="#fff" strokeOpacity={worn ? 0.04 : 0.18} strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="38" fill="#10141d" stroke="#0a0d14" strokeWidth="3" />
      <circle cx={cx} cy={cy} r="26" fill="#262e3d" stroke="#4a5468" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="9" fill="#0a0d14" />
      {[-1, 1].map((s) => {
        const [bx, by] = polar(176, s * 17);
        return <circle key={s} cx={bx} cy={by} r="7" fill="#d9dfe9" stroke="#2a303c" strokeWidth="2" />;
      })}
      {worn && (
        <g stroke="#2a150e" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round">
          <path d="M392 150 q-8 20 2 38" fill="none" />
          <path d="M370 244 q10 16 4 30" fill="none" />
          <circle cx="352" cy="176" r="10" fill="#6b2f12" fillOpacity="0.5" stroke="none" />
        </g>
      )}
    </svg>
  );
}

const annulus = "radial-gradient(circle closest-side, transparent 47%, #000 48%, #000 90%, transparent 91%)";

type Props = {
  condition?: Condition;
  /** Rotation in degrees. Pass a MotionValue to animate. */
  rotate?: MotionValue<number>;
  /** 0 to 1 glow of a hot, spinning disc. */
  heat?: MotionValue<number>;
  className?: string;
};

export function BrakeAssembly({ condition = "new", rotate, heat, className = "" }: Props) {
  return (
    <div className={`relative aspect-square ${className}`}>
      {heat && (
        <motion.div
          aria-hidden
          style={{
            opacity: heat,
            background:
              "radial-gradient(circle closest-side, transparent 62%, rgba(255,106,31,0.55) 86%, rgba(211,13,31,0.25) 94%, transparent 100%)",
            filter: "blur(14px)",
          }}
          className="absolute inset-[-4%]"
        />
      )}
      <motion.div style={{ rotate }} className="absolute inset-0 will-change-transform">
        <RotorFace condition={condition} />
      </motion.div>
      {/* Static highlight: stays put while the disc turns under it */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 200deg, transparent 0 6%, rgba(255,255,255,0.30) 11%, transparent 20%, transparent 48%, rgba(190,210,255,0.24) 57%, transparent 66%, transparent 100%)",
          maskImage: annulus,
          WebkitMaskImage: annulus,
          opacity: condition === "worn" ? 0.35 : 1,
        }}
      />
      <Caliper condition={condition} />
    </div>
  );
}
