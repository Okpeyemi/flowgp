import type { Metadata } from "next";
import CommentCaMarche from "@/components/commentçamarche/commentçamarche";
import { SITE_URL } from "@/lib/site";
import Script from "next/script";
import { COMMENTÇAMARCHE } from "@/lib/commentçamarche";

export const metadata: Metadata = {
  title: "Comment ça marche – Méthode FlowGP",
  description:
    "Méthode FlowGP : analyse, création, automatisation puis optimisation continue grâce à l’IA.",
  alternates: { canonical: "/comment-ca-marche" },
  keywords: [
    "méthode FlowGP",
    "processus optimisation",
    "stratégie digitale",
    "automatisation IA",
  ],
  openGraph: {
    title: "Comment ça marche – Méthode FlowGP",
    description:
      "Méthode FlowGP : analyse, création, automatisation puis optimisation continue grâce à l’IA.",
    url: `${SITE_URL}/comment-ca-marche`,
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
    title: "Comment ça marche – Méthode FlowGP",
    description:
      "Méthode FlowGP : analyse, création, automatisation puis optimisation continue grâce à l’IA.",
    images: ["/flow-default.png"],
  },
};

export default function CommentCaMarchePage() {
  return (
    <main>
      <h1 className="sr-only">Comment ça marche – Méthode FlowGP</h1>
      <CommentCaMarche />
      <Script
        id="schema-org-howto"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Comment ça marche – Méthode FlowGP",
            url: `${SITE_URL}/comment-ca-marche`,
            description:
              "Méthode FlowGP : analyse, création, automatisation puis optimisation continue grâce à l’IA.",
            step: COMMENTÇAMARCHE.map((s, idx) => ({
              "@type": "HowToStep",
              position: idx + 1,
              name: s.title,
              text: s.desc,
            })),
          }),
        }}
      />
    </main>
  );
}