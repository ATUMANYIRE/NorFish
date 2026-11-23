// Norfish mark: a fish pointing north (Nor-fish) whose nose breaks through a compass ring.
// Everything is currentColor, so the parent's text colour sets the logo colour.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M30.8 3.08A22 22 0 1 1 17.2 3.08" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24 5C36 15 36 27 24 35 12 27 12 15 24 5ZM24.9 17.6a1.9 1.9 0 1 0 3.8 0 1.9 1.9 0 1 0-3.8 0Z"
      />
      <path d="M24 33.5 16.5 42.5 24 39.5 31.5 42.5Z" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ tagline = true, className = "" }: { tagline?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col">
        <span className="text-[1.4rem] font-semibold leading-none tracking-[-0.04em]">Norfish</span>
        {tagline && (
          <span className="mt-1.5 text-[9px] font-medium uppercase leading-none tracking-[.3em] opacity-55">Since 1974</span>
        )}
      </span>
    </span>
  );
}
