import type { Metadata } from "next";
import { Montserrat, Russo_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADRESS,
  WHATSAPP_NUMBER,
  FACEBOOK_PROFIL,
  INSTAGRAM_PROFIL,
} from "@/lib/contact";

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
  metadataBase: new URL(SITE_URL),
  applicationName: "FlowGP",
  title: {
    default:
      "FlowGP | Tunnels de Vente & Automatisation Marketing en Guadeloupe",
    template: "%s | FlowGP",
  },
  description:
    "Tunnels de vente, automatisations et campagnes multi‑canal optimisées par l’IA pour booster votre croissance en Guadeloupe.",
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
    url: `${SITE_URL}`,
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
      { url: "/flow-default.png", sizes: "32x32", type: "image/png" },
      { url: "/flow-default.png", sizes: "16x16", type: "image/png" },
      { url: "/flow-default.png", sizes: "any" },
    ],
    apple: [{ url: "/flow-default.png", sizes: "180x180", type: "image/png" }],
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
        <WhatsAppButton />
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/flow-default.png`,
              email: COMPANY_EMAIL,
              telephone: COMPANY_PHONE,
              address: COMPANY_ADRESS,
              sameAs: [
                `${FACEBOOK_PROFIL}`,
                `${INSTAGRAM_PROFIL}`,
                `https://wa.me/${WHATSAPP_NUMBER}`,
              ],
            }),
          }}
        />
        <Script
          id="schema-org-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: COMPANY_NAME,
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
