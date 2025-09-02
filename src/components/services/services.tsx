"use client";

import Link from "next/link";

const items = [
  {
    title: "Création de Tunnels de Vente",
    desc: "Nous concevons des tunnels de vente personnalisés pour guider vos prospects de l’intérêt initial à l’achat, avec des stratégies adaptées à votre secteur.",
  },
  {
    title: "Automatisation des Processus",
    desc: "Automatisez vos tâches répétitives, comme la gestion des leads ou l’envoi de messages, pour gagner du temps et améliorer l’efficacité.",
  },
  {
    title: "Campagnes Multi-Canal",
    desc: "Atteignez vos clients là où ils sont : publipostage, réseaux sociaux, emails ou SMS. Nos campagnes intégrées maximisent l’engagement.",
  },
  {
    title: "Optimisation par l’IA",
    desc: "L’intelligence artificielle personnalise vos interactions clients et analyse les données pour optimiser vos tunnels de vente en continu.",
  },
  {
    title: "Accompagnement Personnalisé",
    desc: "Nous vous accompagnons pour intégrer nos solutions et formons vos équipes à tirer parti du marketing moderne.",
  },
];

export default function Services() {
  return (
    <section className="bg-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="max-w-2xl text-center font-mono text-blue text-4xl md:text-5xl lg:text-[64px] font-normal">
          Nos solutions pour votre succès
        </h2>

        <div className="mt-12 space-y-12">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex items-center justify-center gap-6 md:gap-10"
            >
              <div className="max-w-lg">
                <h3 className="text-black text-base sm:text-lg lg:text-2xl font-bold">
                  {it.title}
                </h3>
                <p className="mt-3 text-black text-sm md:text-base leading-relaxed">
                  {it.desc}
                </p>
              </div>
              <div className="hidden md:block">
                <div
                  aria-hidden
                  className="w-60 h-60 bg-gray-200 rounded-md"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contacts"
            className="inline-block rounded-[20px] bg-yellow text-black font-bold px-6 py-4 shadow hover:opacity-95 transition"
          >
            Parlez-nous de votre projet
          </Link>
        </div>
      </div>
    </section>
  );
}
