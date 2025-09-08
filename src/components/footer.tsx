"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const routes = ["/services", "/comment-ca-marche"];

  const isGreen = routes.some((r) => pathname === r || pathname?.startsWith(`${r}/`));
  const bgClass = isGreen ? "bg-green" : "bg-blue";

  const year = new Date().getFullYear();

  return (
    <section className={`font-sans ${bgClass} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex max-md:flex-col items-start justify-between gap-6">
            <Image
              src="/flow-white.png"
              alt="FlowGP"
              width={140}
              height={40}
              className="shrink-0"
              priority
            />
            <div>
              <p className="text-xl font-bold mb-2">Coordonnées :</p>
              <p className="mb-2">
                Email:{" "}
                <Link
                  href="mailto:contact@flowgp.fr"
                  className="underline decoration-white/60 hover:decoration-white"
                >
                  contact@flowgp.fr
                </Link>
              </p>
              <p className="mb-2">
                Téléphone:{" "}
                <Link href="tel:+590000000" className="underline decoration-white/60 hover:decoration-white">
                  +590 XXX XXX XXX
                </Link>
              </p>
              <p>Adresse: [Votre adresse ou domiciliation].</p>
            </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-xl font-bold">Réseaux Sociaux :</p>
            <Image src="/social.png" alt="Réseaux sociaux" width={190} height={40} />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="mailto:contact@flowgp.fr?subject=Prise%20de%20contact%20FlowGP"
            className="bg-yellow text-black font-semibold rounded-[20px] px-6 py-4 shadow hover:opacity-95 transition"
          >
            Prêt à démarrer ? Contactez-nous !
          </Link>
        </div>

        <p className="mt-10 text-center text-xl text-white/80">
          {year} FlowGP. Tous droits réservés.
        </p>
      </div>

    </section>
  );
}