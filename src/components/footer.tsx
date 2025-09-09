"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_PHONE_DISPLAY, COMPANY_ADRESS, WHATSAPP_NUMBER, buildMailto } from "@/lib/contact";

export default function Footer() {
  const pathname = usePathname();

  const routes = ["/services", "/comment-ca-marche"];

  const isGreen = routes.some((r) => pathname === r || pathname?.startsWith(`${r}/`));
  const bgClass = isGreen ? "bg-green" : "bg-blue";

  const year = new Date().getFullYear();

  return (
    <section className={`font-sans ${bgClass} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex max-md:flex-col items-center md:items-start justify-between gap-6">
            <Image
              src="/flow-white.png"
              alt="FlowGP"
              width={140}
              height={40}
              className="shrink-0"
              priority
            />
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold mb-2">Coordonnées :</p>
              <p className="mb-2">
                Email:{" "}
                <Link
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="underline decoration-white/60 hover:decoration-white"
                >
                  {COMPANY_EMAIL}
                </Link>
              </p>
              <p className="mb-2">
                Téléphone:{" "}
                <Link
                  href={`tel:${COMPANY_PHONE}`}
                  className="underline decoration-white/60 hover:decoration-white"
                >
                  {COMPANY_PHONE_DISPLAY}
                </Link>
              </p>
              <p className="mb-2">
                Adresse:{" "}
                  {COMPANY_ADRESS}
              </p>
            </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-xl font-bold">Réseaux Sociaux :</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61580360632496"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link
                href="https://www.instagram.com/flowgp971?igsh=MTVwOGkyeHNyZGVpbA=="
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Image
                  src="/whatsapp.png" 
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="w-6 h-6 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={buildMailto("Prise de contact FlowGP")}
            className="bg-yellow max-md:hidden text-black font-bold rounded-[20px] px-6 py-4 shadow hover:opacity-95 transition"
          >
            Prêt à démarrer ? Contactez-nous !
          </Link>
          <Link
            href={buildMailto("Prise de contact FlowGP")}
            className="bg-yellow md:hidden w-full text-center text-black font-bold rounded-[20px] px-6 py-4 shadow hover:opacity-95 transition"
          >
            Prêt à démarrer ? <br /> Contactez-nous !
          </Link>
        </div>

        <p className="mt-10 text-center text-xl text-white/80">
          {year} FlowGP. Tous droits réservés.
        </p>
      </div>

    </section>
  );
}