"use client";

import { FormEvent } from "react";

export default function Section4() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Félicitation vous êtes enregistré à la newsletter!")
  };

  return (
    <section className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2
          className="text-black text-3xl md:text-5xl lg:text-[64px] font-black"
        >
          Des Résultats à Votre Portée
        </h2>

        <p className="mt-6 text-black text-base sm:text-lg lg:text-2xl leading-relaxed">
          Nos solutions augmentent vos conversions en combinant technologie moderne et
          expertise locale. Que vous soyez dans le tourisme, le commerce ou les services,
          nous boostons votre croissance.
        </p>

        <form onSubmit={onSubmit} className="mt-10 mx-auto max-w-xl space-y-4">
          <label htmlFor="newsletter-email" className="sr-only">
            Votre mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Votre mail"
            className="w-full rounded-full bg-[#F0F0F0] px-6 py-4 text-black placeholder-black/40 outline-none focus:ring-2 focus:ring-black/70"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-black text-white font-semibold px-6 py-4 hover:opacity-95 transition"
          >
            Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}