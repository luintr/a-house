import React, { useState } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "@utils/anim";
import Links from "./Links";
import Curve from "./Curve";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => {
            return (
              <Links
                key={index}
                data={{ ...data, index }}
                activeLink={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Links>
            );
          })}
        </div>

        <div className={styles.footer}>
          <a>Awwwards</a>

          <a>Instagram</a>

          <a>Dribble</a>

          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Navbar;
