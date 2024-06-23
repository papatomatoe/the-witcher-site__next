export const MOCK_ACTORS = [
	{
		id: "1",
		name: "Генри Кавилл",
		personage: "Геральт",
		description:
			"Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
		image: "/uploads/actor-01",
	},
	{
		id: "2",
		name: "Джои Бэти",
		personage: "Лютик",
		description:
			"Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
		image: "/uploads/actor-02",
	},
	{
		id: "3",
		name: "Аня Чалотра",
		personage: "Йеннифэр",
		description:
			"Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
		image: "/uploads/actor-03",
	},
	{
		id: "4",
		name: "Фрейя Аллан",
		personage: "Цири",
		description:
			"Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
		image: "/uploads/actor-04",
	},
	{
		id: "5",
		name: "Барт Эдвардс",
		personage: "Эмгыр вар Эмрейс",
		description:
			"Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
		image: "/uploads/actor-05",
	},
];

export const MOCK_CITY_OPTIONS = [
	{ value: "Москва", title: "Москва" },
	{ value: "Санкт-Петербург", title: "Санкт-Петербург" },
	{ value: "Казань", title: "Казань" },
	{ value: "Краснодар", title: "Краснодар" },
	{ value: "Ростов на дону", title: "Ростов на дону" },
];

export const MOCK_MARKERS = [
	{
		id: "1",
		coords: { lon: 37.617500738388884, lat: 55.75026584647786 },
		title: "Магазин 1",
		address: "Москва, Улица, д. 34",
	},
	{
		id: "2",
		coords: { lon: 37.55481582427509, lat: 55.75553216507733 },
		title: "Еще Магазин",
		address: "Москва, Еще одна улица, д. 123",
	},
	{
		id: "3",
		coords: { lon: 37.52477189060189, lat: 55.78339374064491 },
		title: "Еще Магазин",
		address: "Москва, Еще улица, д. 55",
	},
];

export const MOCK_PHOTOS = [
	{
		id: "1",
		image: "uploads/photo-01",
		alt: "Генри Кавилл в образе ведьмака держит операторскую хлопушку",
	},
	{
		id: "2",
		image: "uploads/photo-02",
		alt: "Съемочный процесс",
	},
	{
		id: "3",
		image: "uploads/photo-03",
		alt: "Съемочный процесс",
	},
	{
		id: "4",
		image: "uploads/photo-04",
		alt: "Аня Чалотра в образе Йеннифэр смотрит в видоискатель камеры на съемочной площадке",
	},
	{
		id: "5",
		image: "uploads/photo-05",
		alt: "Группа каскадеров позирует на фоне декораций фильма",
	},
	{
		id: "_2",
		image: "uploads/photo-02",
		alt: "Съемочный процесс",
	},
	{
		id: "_3",
		image: "uploads/photo-03",
		alt: "Съемочный процесс",
	},
	{
		id: "_4",
		image: "uploads/photo-04",
		alt: "Аня Чалотра в образе Йеннифэр смотрит в видоискатель камеры на съемочной площадке",
	},
	{
		id: "_5",
		image: "uploads/photo-05",
		alt: "Группа каскадеров позирует на фоне декораций фильма",
	},
	{
		id: "__1",
		image: "uploads/photo-01",
		alt: "Генри Кавилл в образе ведьмака держит операторскую хлопушку",
	},
	{
		id: "__2",
		image: "uploads/photo-02",
		alt: "Съемочный процесс",
	},
	{
		id: "__3",
		image: "uploads/photo-03",
		alt: "Съемочный процесс",
	},
	{
		id: "__4",
		image: "uploads/photo-04",
		alt: "Аня Чалотра в образе Йеннифэр смотрит в видоискатель камеры на съемочной площадке",
	},
	{
		id: "__5",
		image: "uploads/photo-05",
		alt: "Группа каскадеров позирует на фоне декораций фильма",
	},
	{
		id: "___2",
		image: "uploads/photo-02",
		alt: "Съемочный процесс",
	},
	{
		id: "___3",
		image: "uploads/photo-03",
		alt: "Съемочный процесс",
	},
	{
		id: "___4",
		image: "uploads/photo-04",
		alt: "Аня Чалотра в образе Йеннифэр смотрит в видоискатель камеры на съемочной площадке",
	},
	{
		id: "___5",
		image: "uploads/photo-05",
		alt: "Группа каскадеров позирует на фоне декораций фильма",
	},
];

export const getPhotos = async ({
	qty,
	shift,
}: {
	qty: number;
	shift: number;
}) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return MOCK_PHOTOS.slice(shift, shift + qty);
};
