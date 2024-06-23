export interface Props {
	name: string;
	placeholder?: string;
	error?: string;
	onClearError: (key: string) => void;
}
