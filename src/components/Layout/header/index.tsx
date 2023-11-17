/* eslint-disable react/display-name */
"use client";
import { useNavState } from "@/store/store";
import Navbar from "../nav";
import Logo from "@images/logo_hori.png";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import Framer from "../../framer";
import s from "./styles.module.scss";

const Header = forwardRef<TCustomMotionDivProps, TCustomMotionDivProps>(
	(props, ref) => {
		const { isActive, setIsActive } = useNavState();
		return (
			<header className={s.header}>
				<div
					className={`${s.backdrop} ${isActive ? s.open : ""}`}
					onClick={setIsActive}
				></div>
				<Link href={"/"} className={s.logo}>
					<Image
						width={Logo.width}
						height={Logo.height}
						src={Logo.src}
						alt={"Logo"}
					/>
				</Link>
				<Framer isActive={isActive}>
					<div
						onClick={setIsActive}
						className={`${s.hamburger} ${isActive ? s.active : ""}`}
					>
						<div className={s.burger}>
							<div ref={ref} className={`${s.bounds}`}></div>
						</div>
					</div>
				</Framer>
				<AnimatePresence mode='wait'>{isActive && <Navbar />}</AnimatePresence>
			</header>
		);
	}
);
export default Header;
