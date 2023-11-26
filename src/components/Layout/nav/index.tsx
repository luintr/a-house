import React, { useState } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "@utils/anim";
import Links from "./Links";
import Curve from "./Curve";
import NavItem from "./NavItem";
import useWindowResize from "@/hooks/useWindowResize";
import Footer from "../footer";

const navItems = [
	{
		title: "Heading1",
		href: "/",
		content: "Hehehehe, My name Venn cute!!!!",
		img: "./images/1.jpg",
	},
	{
		title: "Heading2",
		href: "/",
		content: "Hehehehe, My name Venn cute!!!!",
		img: "./images/1.jpg",
	},
	{
		title: "Heading3",
		href: "/",
		content: "Hehehehe, My name Venn cute!!!!",
		img: "./images/1.jpg",
	},
];

const Navbar = () => {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);
	const { isMobile } = useWindowResize();
	return (
		<motion.div
			variants={menuSlide}
			initial='initial'
			animate='enter'
			exit='exit'
			className={styles.menu}
		>
			<div className={styles.body}>
				<div
					onMouseLeave={() => {
						setSelectedIndicator(pathname);
					}}
					className={styles.nav}
				>
					<div className={styles.nav_top}>
						<span className={styles.nav_title}>A-House</span>
						<span className={styles.nav_description}>
							I enjoy sipping on a warm cup of tea while reading a good book.
						</span>
					</div>
					<div className={styles.containerNavItem}>
						{navItems.map((data, index) => {
							return (
								<NavItem
									data={data}
									index={index}
									selectedIndicator={selectedIndicator}
									setSelectedIndicator={setSelectedIndicator}
									key={index}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<Curve />
			{isMobile && <Footer isOpen={true} />}
		</motion.div>
	);
};

export default Navbar;
