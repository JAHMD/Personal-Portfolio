import { ReactNode } from "react";

const SectionHeader = ({ children }: { children: ReactNode }) => {
	return (
		<h2 className="text-3xl font-medium capitalize mb-8 text-center">
			{children}
		</h2>
	);
};

export default SectionHeader;
