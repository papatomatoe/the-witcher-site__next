import { FC } from "react";
import cn from "classnames";
import Picture from "@/components/Picture";
import { Props } from "./types";

import styles from "./Header.module.css";
import Link from "next/link";

const Header: FC<Props> = ({ children, bg = "on" }) => {
	return (
		<header
			className={cn(styles.header, {
				[styles.headerTransparent]: bg === "off",
			})}
		>
			<nav className={cn(styles.header__nav, "page-container")}>
				<Link className={styles.header__logo} href="/">
					<Picture
						src="/uploads/logo"
						alt="Логотип Ведьмак"
						width="106"
						height="36"
					/>
				</Link>
				{children}
			</nav>
		</header>
	);
};

export default Header;
