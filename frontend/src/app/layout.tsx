import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css";
import Navbar from "@/app/components/Navbar";
import { TanstackProvider } from "@/app/lib/providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "The AA - Vehicle Health Monitoring",
	description: "Web Application to Monitor the Health Status of Vehicles",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<TanstackProvider>
					<Navbar />
					<main className="container mx-auto py-8 px-4">{children}</main>
				</TanstackProvider>
			</body>
		</html>
	);
}
