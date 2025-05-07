"use client";
import About from "@/components/about";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/NavBar";
import StoryBehind from "@/components/StoryBehind";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Faq />
      <StoryBehind />
      <Footer />
    </div>
  );
}
