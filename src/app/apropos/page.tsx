import type { Metadata } from "next";
import Apropos from "@/components/apropos/apropos";
import { SITE_URL } from "@/lib/site";
import Script from "next/script";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADRESS,
  WHATSAPP_NUMBER,
  FACEBOOK_PROFIL,
  INSTAGRAM_PROFIL,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "FlowGP : partenaire local en Guadeloupe pour la croissance via tunnels de vente, IA et automatisation.",
  alternates: { canonical: "/apropos" },
  keywords: [
    "FlowGP équipe",
    "marketing Guadeloupe",
    "automatisation locale",
    "agence growth",
  ],
  openGraph: {
    title: "À propos de FlowGP",
    description:
      "Innovation marketing et proximité pour les entreprises guadeloupéennes.",
    url: `${SITE_URL}/apropos`,
    type: "website",
    siteName: "FlowGP",
    locale: "fr_FR",
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
    title: "À propos de FlowGP",
    description:
      "Innovation marketing et proximité pour les entreprises guadeloupéennes.",
    images: ["/flow-default.png"],
  },
};

export default function AproposPage() {
  return (
    <main>
      <h1 className="sr-only">À propos de FlowGP</h1>
      <Apropos />

      <Script
        id="schema-org-aboutpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "À propos de FlowGP",
            url: `${SITE_URL}/apropos`,
            description:
              "FlowGP : partenaire local en Guadeloupe pour la croissance via tunnels de vente, IA et automatisation.",
            about: {
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
            },
          }),
        }}
      />
    </main>
  );
}