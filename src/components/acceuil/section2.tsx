"use client";

export default function Section2() {
  return (
    <section className="bg-green text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2
          className="font-mono text-yellow-400 text-4xl md:text-5xl lg:text-[64px] font-normal"
          style={{ fontFamily: "var(--font-russoone)" }}
        >
          Pourquoi FlowGP ?
        </h2>

        <p className="mt-8 text-base sm:text-lg lg:text-2xl leading-relaxed">
          FlowGP, basé en Guadeloupe, vous aide à maximiser vos ventes grâce à une
          approche combinée d’intelligence artificielle, d’automatisation intelligente
          et de stratégies multi‑canal (publipostage, réseaux sociaux, emailing).
          Nous créons des solutions sur mesure pour les entreprises locales.
        </p>
      </div>
    </section>
  );
}