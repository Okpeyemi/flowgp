"use client";

import Link from "next/link";
import Image from "next/image";

import { SOLUTIONS } from "@/lib/solutions";

export default function Services() {
	return (
		<section className="bg-white font-sans">
			<div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
				<h2 className="max-w-2xl text-center font-mono text-blue text-4xl md:text-5xl font-normal">
					Nos solutions pour votre succès
				</h2>

				<div className="mt-12 space-y-12">
					{SOLUTIONS.map((sol, s) => {
						const isEven = (s + 1) % 2 === 0;
						const isLarge = [0, 2, 3].includes(s);
						return (
							<div
								key={sol.title}
								className={`flex items-center justify-center gap-6 md:gap-10 ${
									isEven ? "md:flex-row-reverse" : ""
								}`}
							>
								<div className="max-w-lg">
									<h3 className="text-black text-base sm:text-lg lg:text-2xl font-bold">
										{sol.title}
									</h3>
									<p className="mt-3 text-black text-sm md:text-base leading-relaxed">
										{sol.desc}
									</p>
								</div>
								<div className="hidden md:block">
									<Image
										src={sol.image}
										alt={sol.title}
										width={isLarge ? 420 : 300}
										height={isLarge ? 420 : 300}
										className={`${
											isLarge ? "w-72 h-72" : "w-60 h-60"
										} rounded-md object-cover`}
										priority={s < 2}
									/>
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-12 flex justify-center">
					<Link
						href="/contacts"
						className="inline-block rounded-[20px] bg-yellow text-black font-bold px-6 py-4 shadow hover:opacity-95 transition"
					>
						Parlez-nous de votre projet
					</Link>
				</div>
			</div>
		</section>
	);
}
