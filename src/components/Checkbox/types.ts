export interface Props {
	name: string;
	label: string;
	error?: string;
	onClearError: (key: string) => void;
}
