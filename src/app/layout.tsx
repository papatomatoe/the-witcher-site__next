import type { Metadata } from "next";

import Footer from "@/components/Footer/Footer";

import "maplibre-gl/dist/maplibre-gl.css";

import "@/styles/globals.css";

export const metadata: Metadata = {
	description: "Сайт посвященный игре и сериалу Ведьмак",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				{children}
				<Footer />
			</body>
		</html>
	);
}
