import cn from "classnames";
import Header from "@/components/Header";
import Contacts from "@/components/Contacts";
import styles from "./layout.module.css";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header bg="off" />
			<main className="page-content">
				<div className={styles.subscribe}>
					<div className={cn(styles.subscribe__container, "page-container")}>
						{children}
						<Contacts />
					</div>
				</div>
			</main>
		</>
	);
}
