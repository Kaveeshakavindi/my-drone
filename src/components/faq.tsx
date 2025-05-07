import { faqs } from "@/data";
import FaqCard from "./questionCard";

export default function Faq() {
  return (
    <div className="font-[var(--font-russo)] p-[4rem]  sticky z-100 w-[100vw] bg-orange-600 flex flex-col justify-center ">
      <div className="text-5xl font-bold text-neutral-800 pb-[5rem]">FAQ !</div>
      <text className="text-neutral-800 pb-[4rem] text-xl">
        Any questions? We got you.
      </text>
      <div className="grid grid-cols-1 gap-[1rem]">
        {faqs.map((card, index) => (
          <FaqCard key={index} question={card.question} answer={card.answer} />
        ))}
      </div>
    </div>
  );
}

//check if the section in center of the screen
//trigger drone to fly and land on the section
