import { useState, useEffect } from "react";

export enum Devise {
	mobile = "mobile",
	tablet = "tablet",
	desktop = "desktop",
}

type DeviseType = keyof typeof Devise;

const BREAKPOINTS = {
	[Devise.mobile]: 360,
	[Devise.tablet]: 720,
	[Devise.desktop]: 1260,
};

export const useDeviseDetect = () => {
	const [devise, setDevise] = useState<DeviseType>(Devise.mobile);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;

			if (width < BREAKPOINTS[Devise.tablet]) {
				setDevise(Devise.mobile);
			} else if (
				width >= BREAKPOINTS[Devise.tablet] &&
				width < BREAKPOINTS[Devise.desktop]
			) {
				setDevise(Devise.tablet);
			} else {
				setDevise(Devise.desktop);
			}
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return devise;
};
