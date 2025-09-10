import type { Metadata } from "next";
import ContactForm from "@/components/contact/contact";
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
  title: "Contact",
  description:
    "Contactez FlowGP : questions, devis ou démarrage de votre projet marketing et automatisation.",
  alternates: { canonical: "/contacts" },
  keywords: [
    "contact FlowGP",
    "devis marketing",
    "automatisation contact",
    "tunnels de vente Guadeloupe",
  ],
  openGraph: {
    title: "Contact FlowGP",
    description: "Expliquez-nous votre besoin : nous revenons sous 24h.",
    url: `${SITE_URL}/contacts`,
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
    title: "Contact FlowGP",
    description: "Expliquez-nous votre besoin : nous revenons sous 24h.",
    images: ["/flow-default.png"],
  },
};

export default function ContactsPage() {
  return (
    <main>
      <h1 className="sr-only">Contacts</h1>
      <ContactForm />
      <Script
        id="schema-org-contactpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact FlowGP",
            url: `${SITE_URL}/contacts`,
            description:
              "Expliquez-nous votre besoin : nous revenons sous 24h.",
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
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: COMPANY_EMAIL,
                telephone: COMPANY_PHONE,
                availableLanguage: ["fr-FR"],
                areaServed: "GP",
              },
            },
          }),
        }}
      />
    </main>
  );
}
