import { aboutCards, carouselImages } from "@/data";
import { Card } from "./card";
import Carousel from "./carousal";

export default function About() {
  return (
    <div className="font-[var(--font-russo)] p-[4rem] text-black sticky z-100 w-[100vw] bg-neutral-200 flex flex-col justify-center ">
      <div className="text-5xl font-bold text-orange-600 pb-[5rem]">
        Introducing Ember
      </div>
      <text className="text-black pb-[4rem]">
        Bright, fast, and beautifully stable. Whether it’s sunrise or action
        shots, Ember makes every moment epic.
      </text>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:gap-[3rem]">
        {aboutCards.map((card, index) => (
          <Card key={index} title={card.title} sub={card.sub} />
        ))}
      </div>
      <div className="text-3xl font-bold text-black pb-[2rem] pt-[5rem]">
        Gallery
      </div>
      <p className="text-black">
        Our gallery showcases an exquisite collection of Ember in action — from
        stunning aerial views to precision landings. Explore the elegance,
        speed, and versatility that make Ember more than just a drone.
      </p>

      <Carousel images={carouselImages} />
      <video
        controls
        autoPlay
        muted
        className="w-full h-auto rounded-md shadow-lg"
      >
        <source src="/droneVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

//check if the section in center of the screen
//trigger drone to fly and land on the section
