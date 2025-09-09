import type { Metadata } from "next";
import Services from "@/components/services/services";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | FlowGP",
  description:
    "Création de tunnels de vente, automatisation des processus, campagnes multi‑canal et optimisation IA pour votre business en Guadeloupe.",
  alternates: { canonical: "/services" },
  keywords: [
    "services marketing",
    "tunnels de vente",
    "automatisation",
    "campagnes multi canal",
    "IA marketing Guadeloupe",
  ],
  openGraph: {
    title: "Services FlowGP",
    description:
      "Des solutions marketing complètes : conversion, automatisation et IA.",
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  );
}