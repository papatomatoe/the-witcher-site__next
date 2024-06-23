"use client";

import { FC, FormEvent, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { IMaskInput } from "react-imask";
import styles from "./Input.module.css";
import { Props } from "./types";
import error from "next/error";

const Input: FC<Props> = ({
	name,
	error = "",
	label,
	mask,
	type = "text",
	onClearError,
}) => {
	const [inputValue, setInputValue] = useState("");

	const handleInput = (e: FormEvent<HTMLInputElement>) => {
		onClearError && onClearError(name);
		const targetValue = (e.target as HTMLInputElement).value;
		setInputValue(targetValue);
	};

	const handleInputMasked = (unmasked: string) => {
		onClearError && onClearError(name);
		setInputValue(unmasked);
	};

	return (
		<div
			className={cn(
				styles.input,
				{ [styles.inputWithoutLabel]: !label },
				{ [styles.inputWithValue]: inputValue },

				{ [styles.inputWithError]: error }
			)}
		>
			<label className={styles.input__container}>
				{label && <p className={styles.input__label}>{label}</p>}

				{mask ? (
					<IMaskInput
						className={styles.input__field}
						type={type}
						mask={mask}
						value={inputValue}
						name={name}
						lazy={false}
						unmask={true}
						onAccept={handleInputMasked}
					/>
				) : (
					<input
						type={type}
						className={styles.input__field}
						value={inputValue}
						name={name}
						onInput={handleInput}
					/>
				)}
			</label>
			{error && (
				<p className={cn(styles.input__error, "error-text")}>{error}</p>
			)}
		</div>
	);
};

export default Input;
