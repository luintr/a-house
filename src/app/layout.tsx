import Layout from "@/components/Layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "A House",
	description: "Coffee For Life",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
