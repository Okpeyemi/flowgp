import type { Metadata } from "next";
import CommentCaMarche from "@/components/commentçamarche/commentçamarche";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Méthode | FlowGP",
  description:
    "Notre processus : analyse, création, automatisation puis optimisation continue grâce à l’IA.",
  alternates: { canonical: "/comment-ca-marche" },
  keywords: [
    "méthode marketing",
    "processus optimisation",
    "stratégie digitale",
    "automatisation IA",
  ],
  openGraph: {
    title: "Comment ça marche – Méthode FlowGP",
    description:
      "Un cadre structuré pour générer et convertir vos leads durablement.",
    url: `${SITE_URL}/comment-ca-marche`,
  },
};

export default function CommentCaMarchePage() {
  return (
    <main>
      <CommentCaMarche />
    </main>
  );
}