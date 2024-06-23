"use client";
import { FC, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Form.module.css";
import { Props } from "./types";
import Select from "@/components/Select";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import File from "@/components/File";
import Checkbox from "@/components/Checkbox";

import { createSubscribe } from "@/app/actions";
import { useFormState } from "react-dom";

const Form: FC<Props> = ({ options }) => {
	const [state, formAction] = useFormState(createSubscribe, null);
	const [errors, setErrors] = useState<Record<string, string[]> | null>(null);

	useEffect(() => {
		if (state?.message) console.warn(state?.message);
		state?.errors && setErrors(state.errors);
	}, [state]);

	const clearError = (key: string) => {
		if (!errors) return;

		const clonedErrors = structuredClone(errors);
		delete clonedErrors[key];

		setErrors(clonedErrors);
	};

	return (
		<section className={styles.formSection}>
			<form className={styles.form} action={formAction}>
				<h2 className={styles.form__title}>Оставьте заявку</h2>
				<div className={styles.form__container}>
					<Select
						key="city"
						name="city"
						placeholder="Выберете город"
						error={errors?.city && errors?.city[0]}
						options={options}
						onClearError={() => clearError("city")}
					/>
					<Input
						key="text"
						type="text"
						name="username"
						label="Имя"
						error={errors?.username && errors?.username[0]}
						onClearError={clearError}
					/>
					<div className={styles.form__fields}>
						<Input
							key="email"
							type="email"
							name="email"
							label="E-mail"
							error={errors?.email && errors?.email[0]}
							onClearError={clearError}
						/>
						<Input
							key="phone"
							type="phone"
							name="phone"
							mask="+7 (000) 000-00-00"
							error={errors?.phone && errors?.phone[0]}
							onClearError={clearError}
						/>
					</div>
					<Textarea
						key="message"
						name="message"
						placeholder="Оставьте пометку к заказу"
						error={errors?.message && errors?.message[0]}
						onClearError={clearError}
					/>
					<File
						key="file"
						name="file"
						placeholder="Прикрепите файл"
						error={errors?.file && errors?.file[0]}
						onClearError={clearError}
					/>
					<Checkbox
						key="personalData"
						name="personalData"
						label="Даю согласие на обработку своих персональных данных"
						error={errors?.personalData && errors?.personalData[0]}
						onClearError={clearError}
					/>
				</div>
				<button
					type="submit"
					className={cn("button", "button--contained", styles.form__submit)}
				>
					Оставить заявку
				</button>
			</form>
		</section>
	);
};

export default Form;
