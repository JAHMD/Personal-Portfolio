import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ahmed | Personal Portfolio",
	description: "Ahmed is a Frontend web developer.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} px-4 bg-gray-50 text-gray-950 relative dark:bg-gray-950 dark:text-gray-300 dark:text-opacity-90`}
			>
				<div
					aria-hidden="true"
					className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#94626390]"
				></div>
				<div
					aria-hidden="true"
					className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#67639490]"
				></div>

				<Header />
				<main className="py-32 flex flex-col items-center">{children}</main>
			</body>
		</html>
	);
}
