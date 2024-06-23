import Link from "next/link";
import { FC } from "react";
import styles from "./Hero.module.css";
import cn from "classnames";

const Hero: FC = () => {
	return (
		<section className={styles.hero}>
			<h2 className="v-h">Баннер</h2>
			<div className="page-container">
				<div className={styles.hero__info}>
					<p className={styles.hero__title}>Сериал Ведьмак</p>
					<p className={styles.hero__text}>
						Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации,
						идет навстречу своей судьбе в неспокойном мире, где люди часто
						оказываются куда коварнее чудовищ.
					</p>
					<Link
						className={cn(styles.hero__link, "button", "button--contained")}
						href="/watch"
					>
						Смотреть сериал
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
