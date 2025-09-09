"use client";

import Link from "next/link";

import { COMMENTÇAMARCHE } from "@/lib/commentçamarche";

export default function CommentCaMarche() {
  return (
    <section className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2
          className="text-center font-mono text-blue text-4xl md:text-5xl font-normal"
        >
          Notre Méthode pour vos résultats
        </h2>

        <div className="mt-12 space-y-10 max-w-5xl mx-auto">
          {COMMENTÇAMARCHE.map((c) => (
            <div
              key={c.title}
              className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-10 items-start"
            >
              <h3 className="text-black text-2xl md:text-3xl font-bold">{c.title}</h3>
              <p className="text-black text-base sm:text-lg lg:text-2xl leading-relaxed">{c.desc}</p>
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