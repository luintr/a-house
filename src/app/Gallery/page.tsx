"use client";

import styles from "./styles.module.scss";

import { MouseEvent, useEffect, useRef } from "react";
import gsap from "gsap";

import ImageData, { GalleryData, TGalleryData } from "@/constants/data";

import Image from "next/image";
import { useRefs } from "@/hooks/useRefs";
import { splitArray } from "@/utils/utils";

const lerp = (start: number, target: number, amount: number) => start * (1 - amount) + target * amount;
let requestAnimationFrameId: any = null;
let xForce = 0;
let yForce = 0;
const easing = 0.12;
const speed = 0.01;
const collections = splitArray<TGalleryData>(GalleryData, 3);

const Gallery = () => {
  const imgRefs = useRefs<HTMLImageElement | null>();
  const planeRefs = useRefs<HTMLDivElement | null>();

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

    gsap.set(planeRefs.refs["0"], { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(planeRefs.refs["1"], {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(planeRefs.refs["2"], {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

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

    for (let i = 0; i < GalleryData.length; i++) {
      tl.to(
        imgRefs.refs[`${i}`],
        {
          top: `${GalleryData[i].top}%`,
          left: `${GalleryData[i].left}%`,
        },
        `-=${duration}`
      );
    }
  }, []);

  return (
    <main onMouseMove={(e) => manageMouseMove(e)} className={styles.main}>
      {collections.map((gallery, i1) => {
        return (
          <div key={i1} ref={(element) => planeRefs.setRef(`${i1}`, element)} className={styles.plane}>
            {gallery.map((item, i2) => {
              return (
                <Image
                  src={item.img}
                  alt="img"
                  key={i2}
                  width={item.width}
                  ref={(element) => imgRefs.setRef(`${i1 * 3 + i2}`, element)}
                  className={`${styles.img}`}
                />
              );
            })}
          </div>
        );
      })}
    </main>
  );
};

export default Gallery;
