"use client";

import { FormEvent } from "react";
import { COMPANY_EMAIL } from "@/lib/contact";

export default function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const mail = (data.get("mail") || "").toString();
    const nom = (data.get("nom") || "").toString();
    const tel = (data.get("tel") || "").toString();
    const besoin = (data.get("besoin") || "").toString();

    const to = COMPANY_EMAIL;
    const subject = encodeURIComponent(`Contact FlowGP - ${nom || "Nouvelle demande"}`);
    const body = encodeURIComponent(
      `Nom: ${nom}\nEmail: ${mail}\nTéléphone: ${tel}\n\nBesoin:\n${besoin}\n`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-white font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-center text-blue text-3xl md:text-5xl font-black">
          Lancez votre croissance
          <br /> avec FlowGP
        </h1>

        <p className="mt-4 text-center text-black/80">Formulaire :</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label htmlFor="mail" className="sr-only">Votre mail</label>
          <input
            id="mail"
            name="mail"
            type="email"
            required
            placeholder="Votre mail"
            className="w-full rounded-[12px] bg-[#F0F0F0] px-5 py-4 text-black placeholder-black/40 outline-none focus:ring-2 focus:ring-black/70"
          />

            <label htmlFor="nom" className="sr-only">Nom</label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              placeholder="Nom"
              className="w-full rounded-[12px] bg-[#F0F0F0] px-5 py-4 text-black placeholder-black/40 outline-none focus:ring-2 focus:ring-black/70"
            />

            <div className="flex gap-2">
              <span className="select-none rounded-[12px] bg-[#F0F0F0] px-5 py-4 text-black/80 max-md:hidden">
                Téléphone
              </span>
              <input
                id="tel"
                name="tel"
                type="tel"
                inputMode="tel"
                placeholder="Ex: +590 XXXXXXXXX"
                className="flex-1 rounded-[12px] bg-[#F0F0F0] px-5 py-4 text-black placeholder-black/40 outline-none focus:ring-2 focus:ring-black/70"
              />
            </div>

            <label htmlFor="besoin" className="sr-only">Besoin</label>
            <textarea
              id="besoin"
              name="besoin"
              rows={4}
              placeholder="Besoin"
              className="w-full rounded-[12px] bg-[#F0F0F0] px-5 py-4 text-black placeholder-black/40 outline-none focus:ring-2 focus:ring-black/70"
            />

            <button
              type="submit"
              className="w-full rounded-[12px] bg-yellow text-black font-bold px-6 py-4 shadow hover:opacity-95 transition"
            >
              Envoyer ma demande
            </button>

            <p className="text-center text-sm text-black/60">
              L’envoi ouvrira votre logiciel de messagerie.
            </p>
        </form>
      </div>
    </section>
  );
}