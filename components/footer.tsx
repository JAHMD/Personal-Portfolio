export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mb-20 px-4 text-center text-gray-400 max-w-[30rem] sm:max-w-[50rem] mx-auto">
			<small className="mb-2 block text-xs">
				&copy; {year} Ahmed Wael. All rights reserved.
			</small>
			<p className="text-xs leading-6">
				<span className="font-semibold">About this website:</span> built with
				React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
				React Email & Resend, Vercel hosting.
				<br />
				All thanks to Ricardo.
			</p>
		</footer>
	);
}
