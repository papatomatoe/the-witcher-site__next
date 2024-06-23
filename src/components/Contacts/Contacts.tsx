import { FC } from "react";
import cn from "classnames";

import styles from "./Contacts.module.css";

const Contacts: FC = () => {
	return (
		<section className={styles.contacts}>
			<h2 className="v-h">Контактная информация</h2>
			<div className={styles.contacts__container}>
				<address className={cn(styles.contacts__address, styles.address)}>
					<div className={styles.address__item}>
						<p className={styles.address__label}>Наша горячая линия</p>
						<a className={styles.address__value} href="tel:88003823112">
							8 800 38 23 112
						</a>
					</div>
					<div className={styles.address__item}>
						<p className={styles.address__label}>Главный офис</p>
						<p className={cn(styles.address__value, styles.address__value__sm)}>
							г. Москва, Садовническая ул., 80
						</p>
					</div>
					<div className={styles.address__item}>
						<p className={styles.address__label}>Часы работы</p>
						<p className={cn(styles.address__value, styles.address__value__sm)}>
							Пн-Пт с 10:00 до 22:00
						</p>
					</div>
				</address>
			</div>
		</section>
	);
};

export default Contacts;
