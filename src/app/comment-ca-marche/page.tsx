import type { Metadata } from "next";
import CommentCaMarche from "@/components/commentçamarche/commentçamarche";

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
    url: "https://www.flowgp.fr/comment-ca-marche",
  },
};

export default function CommentCaMarchePage() {
  return (
    <main>
      <CommentCaMarche />
    </main>
  );
}