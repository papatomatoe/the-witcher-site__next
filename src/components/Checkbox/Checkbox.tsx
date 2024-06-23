import { ChangeEvent, FC, useState } from "react";
import { Props } from "./types";
import cn from "classnames";
import styles from "./Checkbox.module.css";
import Check from "@/components/icons/Check";

const Checkbox: FC<Props> = ({ label, name, error = "", onClearError }) => {
	const [inputValue, setInputValue] = useState(true);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = (e.target as HTMLInputElement).checked;

		onClearError && onClearError(name);
		setInputValue(value);
	};

	return (
		<div
			className={cn(styles.checkbox, {
				[styles.checkboxWithError]: error,
			})}
		>
			<label className={styles.checkbox__container}>
				<input
					className={cn(styles.checkbox__input, "v-h")}
					type="checkbox"
					checked={inputValue}
					name={name}
					onChange={handleChange}
				/>
				<div className={styles.checkbox__icon}>
					<Check />
				</div>
				<p className={styles.checkbox__label}>{label}</p>
			</label>
			{error && (
				<p className={cn(styles.checkbox__error, "error-text")}>{error}</p>
			)}
		</div>
	);
};

export default Checkbox;
