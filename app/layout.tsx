import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// Variable font: covers the 300–700 weights the template asks for.
const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

const title = "Norfish Ltd. — Irish Pelagic & Smoked Fish Exporters, Killybegs";
const description =
  "Family-owned since 1974, Norfish processes and exports mackerel, herring, blue whiting, sprat and oak-smoked fish from Killybegs, Co Donegal, Ireland. Request a trade quote.";

export const metadata: Metadata = {
  metadataBase: new URL("https://norfishltd.com"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_GB", siteName: "Norfish Ltd." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={geist.variable}>
      <body className="bg-white font-geist text-ink">{children}</body>
    </html>
  );
}
