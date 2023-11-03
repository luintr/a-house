"use client";
import React from "react";
import s from "./styles.module.scss";
import { AnimatePresence } from "framer-motion";
import Navbar from "@components/nav";
import { useNavState } from "@/store/store";
import Link from "next/link";
import Image from "next/image";
import Logo from "@images/logo_hori.png";

const Header = () => {
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
      <div
        onClick={setIsActive}
        className={`${s.hamburger} ${isActive ? s.active : ""}`}
      >
        <div className={`${s.burger}`}></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
    </header>
  );
};

export default Header;
