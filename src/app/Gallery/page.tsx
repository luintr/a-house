"use client";

import styles from "./styles.module.scss";

import { MouseEvent, useEffect, useRef } from "react";
import gsap from "gsap";

import ImageData from "@/constants/data";

import Image from "next/image";
import { useRefs } from "@/hooks/useRefs";

const lerp = (start: number, target: number, amount: number) => start * (1 - amount) + target * amount;
let requestAnimationFrameId: any = null;
let xForce = 0;
let yForce = 0;
const easing = 0.12;
const speed = 0.01;
const TOTAL_IMAGES = 9;

const Gallery = () => {
  const imgRefs = useRefs<HTMLImageElement | null>();
  const plane1 = useRef<HTMLDivElement | null>(null);
  const plane2 = useRef<HTMLDivElement | null>(null);
  const plane3 = useRef<HTMLDivElement | null>(null);

  const manageMouseMove = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    gsap.set(plane3.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
    gsap.set(plane1.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  useEffect(() => {
    const duration = 1;
    const tl = gsap.timeline({ defaults: { ease: "expo.inOut", duration } });

    for (let i = 0; i < TOTAL_IMAGES; i++) {
      tl.to(
        imgRefs.refs[`${i}`],
        {
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 80}%`,
        },
        `-=${duration}`
      );
    }
  }, []);

  return (
    <main onMouseMove={(e) => manageMouseMove(e)} className={styles.main}>
      <div ref={plane1} className={styles.plane}>
        <Image src={ImageData[0]} alt="image" width={150} ref={(element) => imgRefs.setRef("0", element)} />
        <Image src={ImageData[0]} alt="image" width={175} ref={(element) => imgRefs.setRef("1", element)} />
        <Image src={ImageData[0]} alt="image" width={200} ref={(element) => imgRefs.setRef("2", element)} />
      </div>
      <div ref={plane2} className={styles.plane}>
        <Image src={ImageData[0]} alt="image" width={200} ref={(element) => imgRefs.setRef("3", element)} />
        <Image src={ImageData[0]} alt="image" width={225} ref={(element) => imgRefs.setRef("4", element)} />
        <Image src={ImageData[0]} alt="image" width={250} ref={(element) => imgRefs.setRef("5", element)} />
      </div>
      <div ref={plane3} className={styles.plane}>
        <Image src={ImageData[0]} alt="image" width={225} ref={(element) => imgRefs.setRef("6", element)} />
        <Image src={ImageData[0]} alt="image" width={300} ref={(element) => imgRefs.setRef("7", element)} />
        <Image src={ImageData[0]} alt="image" width={300} ref={(element) => imgRefs.setRef("8", element)} />
      </div>
    </main>
  );
};

export default Gallery;
