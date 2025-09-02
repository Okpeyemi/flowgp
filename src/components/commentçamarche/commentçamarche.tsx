"use client";

import Link from "next/link";

const steps = [
  {
    title: "Analyse",
    desc:
      "Nous étudions vos besoins et votre audience pour définir une stratégie adaptée.",
  },
  {
    title: "Création",
    desc:
      "Nous concevons des tunnels de vente et campagnes multi‑canal sur mesure.",
  },
  {
    title: "Automatisation",
    desc:
      "Mise en place de processus automatisés pour fluidifier vos opérations.",
  },
  {
    title: "Optimisation",
    desc:
      "Utilisation de l’IA pour analyser et améliorer les performances en continu.",
  },
];

export default function CommentCaMarche() {
  return (
    <section className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2
          className="text-center font-mono text-blue text-4xl md:text-5xl lg:text-[40px] font-extrabold"
          style={{ fontFamily: "var(--font-russoone)" }}
        >
          Notre Méthode pour vos résultats
        </h2>

        <div className="mt-12 space-y-10 max-w-5xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.title}
              className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 items-start"
            >
              <h3 className="text-black text-xl md:text-2xl font-bold">{s.title}</h3>
              <p className="text-black/80 text-base md:text-lg leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contacts"
            className="inline-block rounded-[20px] bg-yellow text-black font-bold px-6 py-4 shadow hover:opacity-95 transition"
          >
            Démarrez votre projet maintenant !
          </Link>
        </div>
      </div>
    </section>
  );
}