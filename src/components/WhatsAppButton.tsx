import Image from "next/image";

const WHATSAPP_NUMBER = "590691268401";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      aria-label="Discuter sur WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 group"
    >
      <span className="sr-only">Contact WhatsApp</span>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green/70 blur-xl opacity-60 group-hover:opacity-90 transition" />
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green shadow-lg ring-2 ring-white/60 hover:scale-105 transition transform">
          <Image
            src="/whatsapp.png"
            alt=""
            width={32}
            height={32}
            className="w-7 h-7 object-contain"
            priority
          />
        </div>
      </div>
    </a>
  );
}