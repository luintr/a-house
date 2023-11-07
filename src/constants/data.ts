import { StaticImageData } from "next/image";
import gallery1 from "@images/1.jpg";
import gallery2 from "@images/2.jpg";
import gallery3 from "@images/3.jpg";
import gallery4 from "@images/4.jpg";
import gallery5 from "@images/5.jpg";
import gallery6 from "@images/6.jpg";
import gallery7 from "@images/7.jpg";
import gallery8 from "@images/8.jpg";
import gallery9 from "@images/9.jpg";
import gallery10 from "@images/10.jpg";
import gallery11 from "@images/11.jpg";
import gallery12 from "@images/12.jpg";
import gallery13 from "@images/13.jpg";
import gallery14 from "@images/14.jpg";

const ImageData: StaticImageData[] = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
];

export type TGalleryData = {
  img: StaticImageData;
  width: number;
  top: number;
  left: number;
};

export const GalleryData: Array<TGalleryData> = [
  {
    img: gallery1,
    width: 300,
    top: 90,
    left: 70,
  },
  {
    img: gallery1,
    width: 200,
    top: 5,
    left: 65,
  },
  {
    img: gallery1,
    width: 150,
    top: 35,
    left: 0,
  },
  {
    img: gallery1,
    width: 150,
    top: 20,
    left: 80,
  },
  {
    img: gallery1,
    width: 225,
    top: 40,
    left: 20,
  },
  {
    img: gallery1,
    width: 200,
    top: 5,
    left: 10,
  },
  {
    img: gallery1,
    width: 150,
    top: 60,
    left: 60,
  },
  {
    img: gallery1,
    width: 250,
    top: 70,
    left: 90,
  },
  {
    img: gallery1,
    width: 350,
    top: 80,
    left: 5,
  },
];

export default ImageData;
