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
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Home",
    href: "/",
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
      </div>
      <Curve />
    </motion.div>
  );
};

export default Navbar;
