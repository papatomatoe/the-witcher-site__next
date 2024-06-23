import { Metadata } from "next";

import Hero from "@/components/Hero";
import Actors from "@/components/Actors";
import Photos from "@/components/Photos";
import Map from "@/components/Map";

import { MOCK_ACTORS, MOCK_MARKERS, getPhotos } from "@/mock";

export const metadata: Metadata = {
	title: "Ведьмак | Главная",
};

export default async function HomePage() {
	const photos = await getPhotos({
		qty: 5,
		shift: 0,
	});
	return (
		<>
			<h1 className="v-h">Главная страница</h1>
			<Hero />
			<Actors actors={MOCK_ACTORS} />
			<Photos photos={photos} />
			<Map markers={MOCK_MARKERS} />
		</>
	);
}
