import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "@utils/anim";
import { useNavState } from "@/store/store";

type ILinks = {
	data: {
		index: number;
		title: string;
		href: string;
	};
	activeLink: boolean;
	setSelectedIndicator: (value: string) => void;
};

const Links = ({ data, activeLink, setSelectedIndicator }: ILinks) => {
	const { title, href, index } = data;
	const { setIsActive } = useNavState();

	return (
		<motion.div
			className={styles.link}
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={index}
			variants={slide}
			initial='initial'
			animate='enter'
			exit='exit'
		>
			<motion.div
				variants={scale}
				animate={activeLink ? "open" : "closed"}
				className={styles.indicator}
			></motion.div>

			<Link onClick={setIsActive} href={href}>
				{title}
			</Link>
		</motion.div>
	);
};

export default Links;
