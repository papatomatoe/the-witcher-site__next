"use client";
import Maplibre, { Marker, Popup } from "react-map-gl/maplibre";
import { FC, useMemo, useState } from "react";
import { Logo } from "@/components/icons/Logo";
import styles from "./Map.module.css";
import cn from "classnames";
import { useDeviseDetect } from "@/hooks/useDeviseDetect";
import { Props } from "./types";
import { table } from "console";

const popupOffset: [number, number] = [0, -40];

const initialViewState = {
	longitude: 37.57350289423982,
	latitude: 55.76387248279491,
	zoom: 11,
};

const HEIGHT = {
	mobile: 400,
	tablet: 400,
	desktop: 540,
};

const Map: FC<Props> = ({ markers }) => {
	const [popupInfo, setPopupInfo] = useState<any>(null);

	const devise = useDeviseDetect();

	const mapHeight = HEIGHT[devise];

	const pins = useMemo(
		() =>
			markers.map((marker) => (
				<Marker
					key={marker.id}
					longitude={marker.coords.lon}
					latitude={marker.coords.lat}
					anchor="bottom"
					onClick={(e) => {
						e.originalEvent.stopPropagation();
						setPopupInfo(marker);
					}}
				>
					<div className={styles.map__marker}>
						<Logo />
					</div>
				</Marker>
			)),
		[markers]
	);
	return (
		<section className={styles.mapSections}>
			<div className={styles.mapSections__container}>
				<div className="page-container">
					<h2 className={styles.mapSections__title}>Магазины мерча ведьмака</h2>
				</div>
			</div>
			<div className={styles.mapSections__wrapper}>
				<Maplibre
					initialViewState={initialViewState}
					style={{ height: mapHeight }}
					mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
				>
					{pins}
					{popupInfo && (
						<Popup
							anchor="bottom"
							offset={popupOffset}
							closeButton={false}
							longitude={Number(popupInfo.coords.lon)}
							latitude={Number(popupInfo.coords.lat)}
							onClose={() => setPopupInfo(null)}
						>
							<address className={cn(styles.map__address, styles.address)}>
								<p className={styles.address__title}>{popupInfo.title}</p>
								<p>{popupInfo.address}</p>
							</address>
						</Popup>
					)}
				</Maplibre>
			</div>
		</section>
	);
};

export default Map;
