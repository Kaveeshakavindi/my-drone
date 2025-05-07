import { JSX } from "react";

export interface StickyScrollProps {
  images: string[];
  text: string[];
}

export interface cardProps {
  title: string;
  sub: string;
}
export interface faqCardProps {
  question: string;
  answer: string;
}

export interface carouselProps {
  images: { path: string; alt: string }[];
}

export type DroneModelProps = Partial<{ object: object }> &
  JSX.IntrinsicElements["primitive"];
