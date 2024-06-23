"use client";

import { FC, useCallback, useEffect, useState } from "react";
import cn from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { useDetectClickOutside } from "react-detect-click-outside";
import Picture from "@/components/Picture";
import ArrowLeft from "@/components/icons/ArrowLeft";
import ArrowRight from "@/components/icons/ArrowRight";
import { useEmblaCarouselButtons } from "./useEmblaCarouselButtons";
import { Props } from "./types";
import styles from "./Actors.module.css";

const Actors: FC<Props> = ({ actors = [] }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const [progress, setProgress] = useState(0);
	const [selectedActorId, setSelectedActorId] = useState<string | null>(null);

	const ref = useDetectClickOutside({
		onTriggered: () => {
			setSelectedActorId(null);
		},
	});

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = useEmblaCarouselButtons(emblaApi);

	const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
		const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
		setProgress(progress);
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onScroll(emblaApi);
		emblaApi
			.on("reInit", onScroll)
			.on("scroll", onScroll)
			.on("slideFocus", onScroll);
	}, [emblaApi, onScroll]);

	const handleSelectActor = (id: string) => setSelectedActorId(id);

	if (!actors.length) return null;

	return (
		<section className={styles.actors}>
			<div className={cn(styles.actors__container, styles.container)}>
				<div className={cn(styles.container__box, "page-container")}>
					<h2 className={styles.actors__title}>Актерский состав</h2>
					{actors?.length > 0 && (
						<>
							<div className={styles.actors__buttons}>
								<button
									className={styles.actors__button}
									type="button"
									onClick={onPrevButtonClick}
									disabled={prevBtnDisabled}
									aria-label="перейти к предыдущему актеру"
								>
									<ArrowLeft />
								</button>
								<button
									className={styles.actors__button}
									type="button"
									onClick={onNextButtonClick}
									disabled={nextBtnDisabled}
									aria-label="перейти к следующему актеру"
								>
									<ArrowRight />
								</button>
							</div>
							<progress className={styles.actors__progress} value={progress} />
						</>
					)}
				</div>
			</div>

			{actors?.length > 0 && (
				<div className={styles.embla} ref={emblaRef}>
					<ul className={cn(styles.embla__container, styles.actors__list)}>
						{actors.map((actor) => (
							<li
								key={actor.id}
								className={cn(
									styles.embla__slide,
									styles.actors__item,
									styles.actor
								)}
							>
								<button
									ref={ref}
									className={styles.actor__button}
									type="button"
									onClick={() => handleSelectActor(actor.id)}
								>
									<Picture
										src={actor.image}
										alt={`фото ${actor.name}`}
										width="216"
										height="280"
									/>
									<div
										className={cn(styles.actor__info, {
											[styles.actor__info__selected]:
												selectedActorId === actor.id,
										})}
									>
										<p className={styles.actor__pers}>{actor.personage}</p>
										<h3 className={styles.actor__name}>{actor.name}</h3>
										{selectedActorId === actor.id && (
											<p className={styles.actor__desc}>{actor.description}</p>
										)}
									</div>
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
};

export default Actors;
