import type { Metadata } from "next";
import { Montserrat, Russo_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const russoOne = Russo_One({
  variable: "--font-russoone",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.flowgp.fr"),
  applicationName: "FlowGP",
  title: {
    default: "FlowGP | Tunnels de Vente & Automatisation Marketing en Guadeloupe",
    template: "%s | FlowGP",
  },
  description:
    "FlowGP conçoit des tunnels de vente, automatise vos processus marketing et orchestre des campagnes multi‑canal optimisées par l’IA pour développer votre activité en Guadeloupe.",
  keywords: [
    "tunnel de vente",
    "automatisation marketing",
    "campagnes multi canal",
    "IA marketing",
    "growth",
    "Guadeloupe",
    "génération de leads",
    "marketing digital",
  ],
  authors: [{ name: "FlowGP" }],
  creator: "FlowGP",
  publisher: "FlowGP",
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.flowgp.fr/",
    siteName: "FlowGP",
    title: "FlowGP | Automatisation & Tunnels de Vente",
    description:
      "Tunnels de vente, automatisations et campagnes multi‑canal pour accélérer votre croissance en Guadeloupe.",
    images: [
      {
        url: "/flow-default.png",
        width: 1200,
        height: 630,
        alt: "FlowGP - Automatisation & Tunnels de Vente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowGP | Automatisation & Tunnels de Vente",
    description:
      "Automatisation marketing, IA et tunnels de conversion pour votre croissance.",
    images: ["/flow-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${russoOne.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
