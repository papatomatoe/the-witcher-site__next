export interface Props {
	mask?: string;
	name: string;
	label?: string;
	error?: string;
	type?: "text" | "email" | "phone";
	onClearError: (key: string) => void;
}
