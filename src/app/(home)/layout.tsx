import Header from "@/components/Header";
import Link from "next/link";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header>
				<Link className="button" href="/subscribe">
					Подключить подписку
				</Link>
			</Header>
			<main className="page-content">{children}</main>
		</>
	);
}
