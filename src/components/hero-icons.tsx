import { useId, type ReactNode } from "react";

const ADOBE = {
  Pr: { bg: "#00005b", fg: "#9999ff" },
  Ae: { bg: "#00005b", fg: "#9999ff" },
  Ai: { bg: "#330000", fg: "#ff9a00" },
  Ps: { bg: "#001e36", fg: "#31a8ff" },
} as const;

type AdobeApp = keyof typeof ADOBE;

// Icons are sized by the parent's font-size: 1em = one tile.
export function AdobeBadge({ app }: { app: AdobeApp }) {
  const { bg, fg } = ADOBE[app];
  return (
    <span
      aria-hidden="true"
      className="grid aspect-square w-[1em] place-items-center rounded-[24%] border-[0.035em] font-bold leading-none"
      style={{
        backgroundColor: bg,
        backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.1), transparent 55%)",
        borderColor: `${fg}99`,
        color: fg,
        boxShadow: `0 0.12em 0.35em -0.1em ${fg}66, inset 0 1px 0 rgba(255,255,255,0.12)`,
      }}
    >
      <span className="text-[0.46em] tracking-[-0.03em]">{app}</span>
    </span>
  );
}

export function AppTile({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="grid aspect-square w-[1em] place-items-center rounded-[24%] border-[0.035em] border-white/15 bg-[#0c1a33] shadow-[0_0.12em_0.35em_-0.1em_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]"
    >
      {children}
    </span>
  );
}

export function FigmaGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 57" className={className} aria-hidden="true">
      <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  );
}

export function ClapperGlyph({ className }: { className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe45c" />
          <stop offset="0.3" stopColor="#ff7a59" />
          <stop offset="0.55" stopColor="#ff4fb8" />
          <stop offset="0.8" stopColor="#8b6cff" />
          <stop offset="1" stopColor="#38c8ff" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.55" cy="0.45" r="0.55">
          <stop offset="0" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="7" y="20" width="34" height="21" rx="3.5" fill={`url(#${id}-body)`} />
      <rect x="7" y="20" width="34" height="21" rx="3.5" fill={`url(#${id}-glow)`} />
      <rect x="7" y="16" width="34" height="4.5" rx="1" fill="#f4f6fb" />
      <path d="M11 16h4.5l-3 4.5H8zM20 16h4.5l-3 4.5H17zM29 16h4.5l-3 4.5H26zM38 16h3v1.5l-2 3H35z" fill="#15171c" />
      <g transform="rotate(-14 7 16)">
        <rect x="7" y="10.5" width="34" height="5" rx="1" fill="#f4f6fb" />
        <path d="M12 10.5h4.5l3 5H15zM21 10.5h4.5l3 5H24zM30 10.5h4.5l3 5H33z" fill="#15171c" />
      </g>
    </svg>
  );
}
