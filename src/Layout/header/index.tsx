"use client";
import React, { useState } from "react";
import s from "./styles.module.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);


  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={s.button}
    >
      <div
        className={`${s.burger} ${isActive ? s.burgerActive : ""}`}
      ></div>
    </div>
  );
};

export default Header;
