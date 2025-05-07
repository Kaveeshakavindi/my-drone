export interface StickyScrollProps {
  images: string[];
  text: string[];
}

export type DroneState = "idle" | "landHero" | "flyToAbout" | "landAbout";

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
