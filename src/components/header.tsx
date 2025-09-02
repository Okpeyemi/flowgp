"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
	{ href: "/", label: "Accueil" },
	{ href: "/services", label: "Services" },
	{ href: "/apropos", label: "A propos" },
	{ href: "/comment-ca-marche", label: "Comment ça marche" },
	{ href: "/contacts", label: "Contacts" },
];

export function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 font-sans relative">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
				<Link
					href="/"
					className="flex items-center gap-3"
					aria-label="FlowGP - Accueil"
				>
					<Image
						src="/flow-default.png"
						alt="FlowGP"
						width={140}
						height={40}
						priority
					/>
				</Link>

				<nav className="hidden lg:flex items-center gap-10">
					{navItems.map((item) => {
						const active =
							pathname === item.href ||
							(item.href !== "/" && pathname?.startsWith(item.href));
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`text-base transition-colors ${
									active
										? "text-yellow font-bold"
										: "text-black/80 hover:text-black font-normal"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				<div className="flex items-center gap-3">
					<Image
						src="/france.png"
						alt="Français"
						width={22}
						height={22}
						className="rounded-full"
					/>
					{/* Mobile toggle (<= lg) */}
					<button
						type="button"
						aria-label="Ouvrir/fermer le menu"
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
						className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black/5"
					>
						{open ? (
							// Icon: close
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M6 6l12 12M18 6L6 18"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						) : (
							// Icon: hamburger
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M4 6h16M4 12h16M4 18h16"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu panel */}
			<div
				className={`lg:hidden ${open ? "block" : "hidden"} absolute inset-x-0 top-20 z-50 border-t border-gray-100 bg-white shadow-md`}
			>
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid gap-3">
					{navItems.map((item) => {
						const active =
							pathname === item.href ||
							(item.href !== "/" && pathname?.startsWith(item.href));
						return (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className={`py-2 ${
									active
										? "text-yellow font-bold"
										: "text-black/80 hover:text-black"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
}

export default Header;