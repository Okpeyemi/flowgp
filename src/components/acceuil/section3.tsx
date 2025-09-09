"use client";

import { POINTSFORTS } from "@/lib/pointsforts";

export default function Section3() {
  return (
    <section className="bg-green text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2
          className="text-center text-yellow text-3xl md:text-5xl lg:text-[64px] font-black"
        >
          03 Points forts
        </h2>

        <div className="mt-12 mx-auto space-y-12">
          {POINTSFORTS.map((p) => (
            <div
              key={p.title}
              className="grid md:grid-cols-[1fr_2fr] gap-x-10 gap-y-3 items-start"
            >
              <h3 className="text-xl md:text-3xl font-bold">{p.title}</h3>
              <p className="text-base sm:text-lg lg:text-2xl leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}