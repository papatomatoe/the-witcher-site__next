import Link from "next/link";
import { FC } from "react";
import cn from "classnames";
import styles from "./Success.module.css";

const Success: FC = () => {
	return (
		<section className={styles.success}>
			<h2 className={styles.success__title}>Заявка отправлена!</h2>
			<p className={styles.success__text}>
				Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее
				время, чтобы уточнить все детали заказа.
			</p>
			<Link
				className={cn(styles.success__link, "button", "button--contained")}
				href="/"
			>
				Вернуться на главную
			</Link>
		</section>
	);
};

export default Success;
