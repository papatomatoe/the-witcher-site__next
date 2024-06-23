import Picture from "@/components/Picture";
import { Props } from "./types";
import { FC, memo } from "react";
import styles from "./Photos.module.css";
import cn from "classnames";

const Images: FC<Props> = ({ photos }) => {
	if (!photos?.length) return;
	return (
		<ul className={styles.photos__list}>
			{photos.map((photo) => (
				<li key={photo.id} className={cn(styles.photos__item, styles.photo)}>
					<Picture src={photo.image} alt={photo.alt} width="328" height="212" />
				</li>
			))}
		</ul>
	);
};

export default memo(Images);
