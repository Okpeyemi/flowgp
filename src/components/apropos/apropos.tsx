"use client";

export default function Apropos() {
  return (
    <section className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2
          className="text-center text-blue text-3xl md:text-5xl font-black"
        >
          FlowGP : votre allié marketing en Guadeloupe
        </h2>

        <p className="mt-6 text-center text-black text-base sm:text-lg lg:text-2xl leading-relaxed max-w-7xl mx-auto">
          FlowGP est une entreprise guadeloupéenne dédiée à la croissance de vos ventes. Nous
          combinons automatisation, intelligence artificielle et stratégies multi‑canal pour offrir
          des solutions modernes aux PME locales, du tourisme à l’e‑commerce. Notre mission : rendre
          votre marketing plus simple et plus efficace.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <span className="inline-block rounded-[20px] bg-green text-white text-xl font-bold px-8 py-2">
              Valeurs
            </span>
            <p className="mt-4 text-black font-medium">
              Proximité ; performance ; innovation.
            </p>
          </div>

          <div className="flex items-end gap-2">
            <p className="mt-8 text-black/80">
              Fondé par [Votre Nom], passionné par l’innovation et le développement des entreprises
              antillaises.
            </p>
          <div className="hidden lg:block">
            <div aria-hidden className="w-72 h-72 bg-gray-200 rounded-md" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}