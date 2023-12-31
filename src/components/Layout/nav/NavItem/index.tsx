import { useEffect, useRef } from "react";
import Links from "../Links";
import styles from "./styles.module.scss";
export default function NavItem({
	setSelectedIndicator,
	index,
	selectedIndicator,
	data,
}: TNavItemSelected) {
	const itemNavRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (itemNavRef.current) {
			itemNavRef.current.style.backgroundImage = `url(${data.img})`;
		}
	}, []);
	return (
		<div
			className={`${styles.item_nav} ${
				index % 2 == 0 ? styles.item_left : styles.item_right
			}`}
		>
			<div ref={itemNavRef} className={styles.item_nav_inner}>
				<Links
					data={{ ...data, index }}
					activeLink={selectedIndicator == data.href}
					setSelectedIndicator={setSelectedIndicator}
				/>
			</div>
			<p className={styles.description}>{data.content}</p>
		</div>
	);
}
