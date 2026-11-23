// lucide-react dropped brand logos, so the two social icons are inline.
export function Facebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

export function Instagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

// A small fish facing right, drawn from the same shapes as the logo.
export function FishGlyph({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 48 24" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path fillRule="evenodd" d="M46 12C38 2 22 2 12 12 22 22 38 22 46 12ZM36.6 10.5a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 1 0-2.8 0Z" />
      <path d="M13 12 2 3.5 6.5 12 2 20.5Z" />
    </svg>
  );
}

export const SOCIALS = [
  { label: "Norfish on Facebook", href: "https://facebook.com/norfishltd", Icon: Facebook },
  { label: "Norfish on Instagram", href: "https://instagram.com/norfishltd", Icon: Instagram },
];
