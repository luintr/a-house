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
import { DATA_FOOTER } from "@/constants/data-footer";
import Framer from "@/components/framer";
import Link from "next/link";
import { useRefs } from "@/hooks/useRefs";

const navItems = [
  {
    title: "Heading1",
    href: "/",
    content:
      "Sip and savor on the move with 'A House' take-away coffee – where every cup is a quick escape to quality and flavor.",
    img: "./images/home1.jpeg",
  },
  {
    title: "Heading2",
    href: "/",
    content:
      "Elevate your day with 'A House' take-away coffee – crafted for those who appreciate great taste on the fly.",
    img: "./images/home2.jpeg",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const { refs, setRef } = useRefs();
  const { isMobile } = useWindowResize();
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
          <div className={styles.social}>
            <p className={styles.social_title}>Get order through</p>
            <div className={styles.social_list}>
              {DATA_FOOTER.map((df, index) => {
                const Icon = df.icon;
                return (
                  <Framer key={index}>
                    <Link href={df.href} className={styles.itemFooter}>
                      <Icon />
                      <div
                        ref={(element) => setRef(`${index}`, element)}
                        className={`${styles.bounds}`}
                      ></div>
                    </Link>
                  </Framer>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Curve />
      {isMobile && <Footer isOpen={true} />}
    </motion.div>
  );
};

export default Navbar;
