"use client";
import { carouselProps } from "@/types";
import { useState } from "react";

export default function Carousel({ images }: carouselProps) {
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <div className="grid grid-cols-7 py-[5rem] gap-[1rem]">
      <div className="col-span-6 w-full aspect-video overflow-hidden rounded-md border">
        <img
          src={selectedImage !== "" ? selectedImage : images[0].path}
          alt="Selected preview"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="flex flex-wrap justify-between gap-2 ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.path}
            onClick={() => {
              setSelectedImage(img.path);
            }}
            className="w-full object-cover cursor-pointer rounded border-1"
          />
        ))}
      </div>
    </div>
  );
}
