import Success from "@/components/Success";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ведьмак | Заявка отправлена",
};

export default function SuccessPage() {
	return (
		<>
			<h1 className="v-h">Страница подтверждения отправления заявки</h1>
			<Success />
		</>
	);
}
