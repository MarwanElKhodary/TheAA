import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="[background-color:var(--brand-yellow)] text-black shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Image
							src="/theaalogo.png"
							alt="The AA Logo"
							width={50}
							height={50}
							className="object-contain"
						/>
					</div>
					<div className="hidden md:block">
						<div className="flex items-center space-x-4"></div>
					</div>
				</div>
			</div>
		</nav>
	);
}
