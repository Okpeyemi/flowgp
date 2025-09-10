import type { Metadata } from "next";
import Services from "@/components/services/services";
import { SITE_URL } from "@/lib/site";
import Script from "next/script";
import { SOLUTIONS } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Services marketing – Tunnels de Vente, Automatisation & IA",
  description:
    "Services marketing FlowGP : tunnels de vente, automatisation des processus, campagnes multi‑canal et optimisation IA pour votre business en Guadeloupe.",
  alternates: { canonical: "/services" },
  keywords: [
    "services marketing",
    "tunnels de vente",
    "automatisation",
    "campagnes multi canal",
    "IA marketing Guadeloupe",
  ],
  openGraph: {
    title: "Services marketing – Tunnels de Vente, Automatisation & IA",
    description:
      "Des solutions marketing complètes : conversion, automatisation et IA.",
    url: `${SITE_URL}/services`,
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
    title: "Services marketing – Tunnels de Vente, Automatisation & IA",
    description:
      "Des solutions marketing complètes : conversion, automatisation et IA.",
    images: ["/flow-default.png"],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <h1 className="sr-only">
        Services marketing – Tunnels de Vente, Automatisation & IA
      </h1>
      <Services />
      <Script
        id="schema-org-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Services marketing – FlowGP",
            url: `${SITE_URL}/services`,
            description:
              "Tunnels de vente, automatisation, campagnes multi‑canal et optimisation IA.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: SOLUTIONS.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Service",
                  name: s.title,
                  description: s.desc,
                  image: `${SITE_URL}${s.image}`,
                  provider: {
                    "@type": "Organization",
                    name: "FlowGP",
                    url: SITE_URL,
                  },
                },
              })),
            },
          }),
        }}
      />
    </main>
  );
}