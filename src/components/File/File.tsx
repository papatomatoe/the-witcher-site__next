import { ChangeEvent, FC, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./File.module.css";
import { Props } from "./types";
import Clip from "@/components/icons/Clip";

const File: FC<Props> = ({ name, error = "", placeholder, onClearError }) => {
	const [fileName, setFileName] = useState<string | null>(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e?.currentTarget?.files && e.currentTarget.files;

		if (!files || !files.length) return;

		const file = files[0];
		setFileName(file.name);
		onClearError && onClearError(name);
	};

	return (
		<div className={cn(styles.file, { [styles.fileWithError]: error })}>
			<label className={styles.file__container}>
				{fileName ? (
					<p className={styles.file__title}>{fileName}</p>
				) : (
					placeholder && (
						<p className={styles.file__placeholder}>{placeholder}</p>
					)
				)}

				<input
					className={cn(styles.file__input, "v-h")}
					type="file"
					name={name}
					onChange={handleChange}
				/>
				<p className={styles.file__icon}>
					<Clip />
				</p>
			</label>
			{error && <p className={cn("error-text", styles.file__error)}>{error}</p>}
		</div>
	);
};

export default File;
