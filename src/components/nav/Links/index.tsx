import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "@utils/anim";

type ILinks = {
  key: number,
  data: {
    index: number;
    title: string;
    href: string;
  };
  isActive: boolean;
  setSelectedIndicator: (value: string) => void;
};

const Links = ({ data, isActive, setSelectedIndicator }: ILinks) => {
  const { title, href, index } = data;
  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>

      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default Links;
