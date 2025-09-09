import type { Metadata } from "next";
import ContactForm from "@/components/contact/contact";

export const metadata: Metadata = {
  title: "Contact | FlowGP",
  description:
    "Contactez FlowGP : questions, devis ou démarrage de votre projet marketing et automatisation.",
  alternates: { canonical: "/contacts" },
  keywords: [
    "contact FlowGP",
    "devis marketing",
    "automatisation contact",
    "tunnels de vente Guadeloupe",
  ],
  openGraph: {
    title: "Contact FlowGP",
    description:
      "Expliquez-nous votre besoin : nous revenons sous 24h.",
    url: "https://www.flowgp.fr/contacts",
  },
};

export default function ContactsPage() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}