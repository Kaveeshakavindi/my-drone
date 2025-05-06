"use client";
import Hero from "@/components/hero";
import NavBar from "@/components/NavBar";
import StoryBehind from "@/components/StoryBehind";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <StoryBehind />
    </div>
  );
}
