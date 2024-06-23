"use server";
import { redirect } from "next/navigation";
import { ZodError, z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const PHONE_REG = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const registerScheme = z.object({
	city: z
		.string({ required_error: "Город не выбран" })
		.min(1, { message: "Город не выбран" })
		.trim(),
	username: z
		.string({ required_error: "Поле не заполнено" })
		.min(1, { message: "Поле не заполнено" })
		.max(100, { message: "Не должно превышать более 100 символов" })
		.trim(),
	email: z
		.string({ required_error: "Поле не заполнено" })
		.min(1, { message: "Поле не заполнено" })
		.max(100, { message: "Не должно превышать более 100 символов" })
		.email({ message: "Невалидный E-mail адрес" }),
	phone: z
		.string({ required_error: "Поле не заполнено" })
		.regex(PHONE_REG, "Поле не заполнено"),
	message: z
		.string({ required_error: "Поле не заполнено" })
		.min(1, { message: "Поле не заполнено" })
		.trim(),
	file: z
		.any()
		.refine((file) => file && file.size !== 0, "Поле не заполнено")
		.refine((file) => file.size < MAX_FILE_SIZE, "Максимальный размер 5MB")
		.refine(
			(file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
			"Поддерживаются только изображения в формате jpg, jpeg, png"
		),
	personalData: z.enum(["on"], { required_error: "Поле не заполнено" }),
});

export async function createSubscribe(prevState: any, formData: FormData) {
	const rawFormData = Object.fromEntries(formData);

	try {
		const result = registerScheme.safeParse(rawFormData);

		if (!result.success) {
			return { errors: result.error.flatten().fieldErrors };
		}
	} catch (e) {
		return { message: "Server Error" };
	}

	redirect("/subscribe/success");
}
