"use client";

export default function Navbar() {
	return (
		<nav className="bg-yellow-500 text-black shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						{/* ! Ideally just replace this with the logo */}
						<span className="text-xl font-bold">The AA</span>
					</div>
					<div className="hidden md:block">
						<div className="flex items-center space-x-4"></div>
					</div>
				</div>
			</div>
		</nav>
	);
}
