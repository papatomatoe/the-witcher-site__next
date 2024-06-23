import { Props } from "./types";
import { FC } from "react";
import cn from "classnames";
import styles from "./Picture.module.css";

const Picture: FC<Props> = ({ className, src, alt, width, height }) => {
	return (
		<picture className={cn(className, styles.picture)}>
			<source media="(min-width: 1260px)" srcSet={`${src}@desk.avif`} />
			<source media="(min-width: 720px)" srcSet={`${src}@tab.avif`} />
			<img
				className={styles.img}
				src={`${src}@mob.avif`}
				alt={alt}
				width={width}
				height={height}
			/>
		</picture>
	);
};

export default Picture;
