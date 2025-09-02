"use client";

import Link from "next/link";

const informations = [
  { href: "/apropos", label: "À propos" },
  { href: "/equipe", label: "Rencontrez l’équipe" },
  { href: "/carrieres", label: "Carrieres" },
  { href: "/contacts", label: "Contactez-nous" },
];

const services = [
  { href: "#", label: "XXXXXXXXXX" },
  { href: "#", label: "XXXXXXXX" },
  { href: "#", label: "XXXX" },
];

const ressources = [
  { href: "#", label: "AI chatbots" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Guides" },
  { href: "#", label: "Recherche" },
  { href: "#", label: "Études de cas" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white font-sans font-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-black text-xl font-bold mb-4">Informations</h3>
            <ul className="space-y-4">
              {informations.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-black hover:text-black transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-black text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-4">
              {services.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-black hover:text-black transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-black text-xl font-bold mb-4">Ressources</h3>
            <ul className="space-y-4">
              {ressources.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-black hover:text-black transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}