import type { Metadata } from "next";
import Services from "@/components/services/services";

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
    url: "https://www.flowgp.fr/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
    </main>
  );
}