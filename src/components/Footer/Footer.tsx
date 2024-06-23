"use client";

import { Props } from "./types";
import { FC, useRef } from "react";
import styles from "./Footer.module.css";
import cn from "classnames";
import Image from "next/image";
import Instagram from "@/components/icons/Instagram";
import Facebook from "@/components/icons/Facebook";
import VK from "@/components/icons/VK";
import Policy from "@/components/Policy";
import Link from "next/link";

const Footer: FC<Props> = ({}) => {
	const dialog = useRef<HTMLDialogElement>(null);

	const handleOpenPolicyModal = () => {
		const body = document.querySelector("body");
		if (!body?.classList.contains("blocked")) body?.classList.add("blocked");

		dialog.current?.showModal();
	};

	const handleClosePolicyModal = () => {
		const body = document.querySelector("body");
		if (body?.classList.contains("blocked")) body?.classList.remove("blocked");
		dialog.current?.close();
	};

	return (
		<>
			<Policy ref={dialog} onClose={handleClosePolicyModal} />
			<footer className={styles.footer}>
				<div className={cn(styles.footer__container, "page-container")}>
					<Link href="/" className={styles.footer__logo}>
						<Image
							src="/uploads/logo@tab.avif"
							alt="Лого Ведьмак"
							width="130"
							height="44"
						/>
					</Link>

					<button
						className={cn(styles.footer__policy, styles.policy)}
						onClick={handleOpenPolicyModal}
						type="button"
					>
						<span className={styles.policy__text}>
							Политика обработки персональных данных
						</span>
					</button>

					<ul className={cn(styles.footer__social, styles.social)}>
						<li className={styles.social__item}>
							<a className={styles.social__link} href="/">
								<Instagram />
							</a>
						</li>
						<li className={styles.social__item}>
							<a className={styles.social__link} href="/">
								<Facebook />
							</a>
						</li>
						<li className={styles.social__item}>
							<a className={styles.social__link} href="/">
								<VK />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default Footer;
