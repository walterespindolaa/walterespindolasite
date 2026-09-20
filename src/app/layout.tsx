import type { Metadata, Viewport } from "next";
import { Newsreader, Familjen_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Reveal } from "@/components/Reveal";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});
const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
  display: "swap",
});
const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.walterespindola.com.br"),
  title: "Walter Espindola",
  description:
    "Empresário. Encontro um gargalo, entendo o processo e construo um jeito melhor de fazer. Fundador da Zephyr Investimentos e do Atlas.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.walterespindola.com.br",
    siteName: "Walter Espindola",
    title: "Walter Espindola",
    description: "Empresário. Encontro um gargalo, entendo o processo e construo um jeito melhor de fazer.",
    images: [{ url: "/og2.png", width: 1200, height: 630, alt: "Walter Espindola" }],
  },
  twitter: { card: "summary_large_image", images: ["/og2.png"] },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32" }, { url: "/favicon.ico" }],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f0e7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${newsreader.variable} ${familjen.variable} ${plex.variable}`}>
      <body>
        <Reveal />
        {children}
      </body>
    </html>
  );
}
