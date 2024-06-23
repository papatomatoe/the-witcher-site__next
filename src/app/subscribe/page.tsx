import Form from "@/components/Form";
import { MOCK_CITY_OPTIONS } from "@/mock";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ведьмак | Заявка",
};

export default function SubscribePage() {
	return (
		<>
			<h1 className="v-h">Страница оформления заявки</h1>
			<Form options={MOCK_CITY_OPTIONS} />
		</>
	);
}
