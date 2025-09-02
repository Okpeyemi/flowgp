"use client";

export default function Section3() {
  return (
    <section className="bg-green text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2
          className="text-center text-yellow font-mono text-4xl md:text-5xl lg:text-[64px] font-normal"
        >
          03 Points forts
        </h2>

        <div className="mt-12 mx-auto space-y-12">
          <div className="grid md:grid-cols-[1fr_2fr] gap-x-10 gap-y-3 items-start">
            <h3 className="text-2xl md:text-3xl font-bold">
              Tunnels de Vente Performants
            </h3>
            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
              Des parcours clients conçus pour convertir, de la découverte à l’achat.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-x-10 gap-y-3 items-start">
            <h3 className="text-2xl md:text-3xl font-bold">
              Automatisation Simplifiée
            </h3>
            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
              Gagnez du temps en automatisant vos processus marketing et commerciaux.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-x-10 gap-y-3 items-start">
            <h3 className="text-2xl md:text-3xl font-bold">
              Campagnes Multi-Canal
            </h3>
            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
              Engagez vos clients sur plusieurs plateformes pour un impact maximal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}