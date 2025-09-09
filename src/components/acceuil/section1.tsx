"use client";

import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <section className="relative overflow-hidden bg-white font-sans">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-start px-4 sm:px-6 lg:px-8 py-16 lg:py-24 mb-50 max-md:mb-30">
        <div>
          <h1 className="leading-tight text-3xl md:text-5xl lg:text-[64px] font-black">
            <span className="text-blue">FlowGP</span>
            <span className="text-black"> : Boostez</span>
            <br />
            <span className="text-black">vos ventes en</span>
            <br />
            <span className="text-black">Guadeloupe</span>
          </h1>

          <p className="mt-6 text-black/80 text-base text-justify sm:text-lg lg:text-2xl max-w-xl">
            Transformez vos prospects en clients avec des tunnels de vente
            optimisés, des processus automatisés et des campagnes multi‑canal.
          </p>

          <div className="mt-8">
            <Link
              href="/contacts"
              className="inline-block rounded-[20px] font-bold bg-yellow text-black px-6 py-4 shadow hover:opacity-95 transition"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-0 lg:-mt-5">
          <Image
            src="/image-brand.png"
            alt="Illustration de conversion et croissance"
            width={1100}
            height={734}
            className="w-full max-w-[1100px] h-auto"
            priority
          />
        </div>
      </div>

      <Image
        src="/vector.png"
        alt="Vague décorative"
        width={1440}
        height={160}
        className="pointer-events-none absolute bottom-0 left-0 w-full object-cover"
        priority
      />
    </section>
  );
}
