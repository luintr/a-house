"use client";
import React, { useState } from "react";
import s from "./styles.module.scss";
import { AnimatePresence } from "framer-motion";
import Navbar from "@components/nav";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={s.header}>
      <div
        className={`${s.backdrop} ${isActive ? s.open : ""}`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      ></div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`${s.hamburger} ${isActive ? s.active : ""}`}
      >
        <div className={`${s.burger}`}></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
    </header>
  );
};

export default Header;
