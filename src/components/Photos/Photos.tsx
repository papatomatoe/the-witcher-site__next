"use client";

import { Props } from "./types";
import { FC, useState } from "react";
import cn from "classnames";
import styles from "./Photos.module.css";
import { getPhotos } from "@/mock";
import { useDeviseDetect, Devise } from "@/hooks/useDeviseDetect";
import Images from "./Images";

const Photos: FC<Props> = ({ photos = [] }) => {
	const [images, setImages] = useState(photos);
	const [loading, setLoading] = useState(false);

	const devise = useDeviseDetect();

	const handleShowMorePhotos = async () => {
		setLoading(true);
		try {
			const newPhotos = await getPhotos({
				qty: devise === Devise.mobile ? 3 : 8,
				shift: images.length,
			});
			setImages((prev) => [...prev, ...newPhotos]);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};

	if (!photos.length) return null;

	return (
		<section className={styles.photos}>
			<div className="page-container">
				<h2 className={styles.photos__title}>Кадры со съемок</h2>
				<Images photos={images} />
				<button
					className={cn("button", styles.photos__button)}
					type="button"
					onClick={handleShowMorePhotos}
					disabled={loading}
				>
					{loading ? "..." : "Показать еще"}
				</button>
			</div>
		</section>
	);
};

export default Photos;
