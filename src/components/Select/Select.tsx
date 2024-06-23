"use client";
import { FC, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Select.module.css";
import { IOption, Props } from "./types";
import Arrow from "@/components/icons/Arrow";
import { useDetectClickOutside } from "react-detect-click-outside";

const Select: FC<Props> = ({
	label,
	name,
	placeholder,
	value,
	error,
	options,
	onClearError,
}) => {
	const [selected, setSelected] = useState<IOption>(
		value ?? { title: "", value: "" }
	);
	const [showOptions, setShowOptions] = useState(false);
	// const [selectError, setSelectError] = useState("");

	// useEffect(() => {
	// 	error && setSelectError(error);
	// }, [error]);

	const ref = useDetectClickOutside({
		onTriggered: () => {
			setShowOptions(false);
		},
	});

	const handleToggleOptions = () => {
		// setSelectError("");
		onClearError && onClearError();
		setShowOptions((prev) => !prev);
	};

	const handleSelectOption = (option: IOption) => {
		// setSelectError("");
		setSelected(option);
		setShowOptions(false);
	};

	return (
		<>
			<div className={styles.select} ref={ref}>
				<div
					className={cn(styles.select__container, {
						[styles.select__container__error]: error,
					})}
				>
					{label && <p className={styles.select__label}>{label}</p>}

					<button
						className={styles.select__button}
						type="button"
						onClick={handleToggleOptions}
					>
						<p className={styles.button__text}>
							{selected?.title ? (
								<span>{selected.title}</span>
							) : (
								<span className={styles.select__placeholder}>
									{placeholder ?? "select..."}
								</span>
							)}
						</p>
						<p
							className={cn(styles.select__icon, {
								[styles.select__icon__flip]: showOptions,
							})}
						>
							<Arrow />
						</p>
					</button>
					{options?.length && showOptions && (
						<ul className={styles.select__options}>
							{options.map((option) => (
								<li
									key={option.value}
									className={cn(styles.select__option, styles.option)}
								>
									<button
										className={cn(styles.select__button, styles.option__button)}
										type="button"
										onClick={() => handleSelectOption(option)}
									>
										{option.title}
									</button>
								</li>
							))}
						</ul>
					)}
				</div>
				{error && (
					<p className={cn(styles.select__error, "error-text")}>{error}</p>
				)}
			</div>
			<input type="hidden" name={name} value={selected?.value} />
		</>
	);
};

export default Select;
