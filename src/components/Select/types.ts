export interface Props {
	options?: IOption[];
	value?: IOption;
	name: string;
	label?: string;
	placeholder?: string;
	error?: string | null;
	onClearError: () => void;
}

export interface IOption {
	value: string;
	title: string;
}
