"use client";
import Image from "next/image";

export default function Apropos() {
  return (
    <section className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-center text-blue text-3xl md:text-5xl font-black">
          FlowGP : votre allié marketing
          <br className="hidden md:block" /> en Guadeloupe
        </h2>

        <div className="mt-12 grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="max-w-[546px] mx-auto lg:mx-0">
            <p className="text-black text-sm sm:text-base text-justify lg:text-[15px] leading-relaxed">
              FlowGP est une entreprise guadeloupéenne dédiée à la croissance de vos ventes.
              Nous combinons automatisation, intelligence artificielle et stratégies multi‑canal
              pour offrir des solutions modernes aux PME locales, du tourisme à l’e‑commerce.
              Notre mission : rendre votre marketing plus simple et plus efficace.
            </p>

            <div className="mt-6">
              <span className="inline-block rounded-[8px] bg-green text-white text-sm font-bold px-5 py-2">
                Valeurs
              </span>
              <p className="mt-4 text-black text-sm">
                Proximité ; performance ; innovation.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/apropos.png"
              alt="Illustration croissance marketing FlowGP"
              width={723}
              height={723}
              className="w-full max-w-[723px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}