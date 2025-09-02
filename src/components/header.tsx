"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ href: "/", label: "Accueil" },
	{ href: "/services", label: "Services" },
	{ href: "/apropos", label: "A propos" },
	{ href: "/comment-ca-marche", label: "Comment ça marche" },
	{ href: "/contacts", label: "Contacts" },
];

export function Header() {
	const pathname = usePathname();

	return (
		<header
			className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 font-sans"
		>
			<div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
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

				<nav className="hidden md:flex items-center gap-10">
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
										? "text-yellow-400 font-bold"
										: "text-black/80 hover:text-black font-normal"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				<div className="flex items-center gap-2">
					<Image
						src="/france.png"
						alt="Français"
						width={22}
						height={22}
						className="rounded-full"
					/>
					<svg
						aria-hidden="true"
						width="14"
						height="14"
						viewBox="0 0 20 20"
						fill="none"
						className="text-black/70"
					>
						<path
							d="M5 7l5 6 5-6"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
		</header>
	);
}

export default Header;