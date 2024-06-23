import { FC, FormEvent, useState } from "react";
import { Props } from "./types";
import styles from "./Textarea.module.css";
import cn from "classnames";

const Textarea: FC<Props> = ({
	name,
	placeholder,
	error = "",
	onClearError,
}) => {
	const [inputValue, setInputValue] = useState("");

	const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
		const targetValue = (e.target as HTMLTextAreaElement).value;
		setInputValue(targetValue);
		onClearError && onClearError(name);
	};
	return (
		<label
			className={cn(styles.textarea, {
				[styles.textareaWithError]: error,
			})}
		>
			<textarea
				className={styles.textarea__field}
				name={name}
				placeholder={placeholder}
				value={inputValue}
				onInput={handleInput}
			/>
			{error && <p className="textarea__error error-text">{error}</p>}
		</label>
	);
};

export default Textarea;
