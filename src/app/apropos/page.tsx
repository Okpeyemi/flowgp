import type { Metadata } from "next";
import Apropos from "@/components/apropos/apropos";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos | FlowGP",
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
  },
};

export default function AproposPage() {
  return (
    <main>
      <Apropos />
    </main>
  );
}