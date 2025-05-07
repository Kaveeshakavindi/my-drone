"use client";
import { faqCardProps } from "@/types";
import { useState } from "react";

export default function FaqCard({ question, answer }: faqCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  function plusClickHandle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="border border-neutral-100 text-lg p-4 rounded-md ">
      <div
        onClick={plusClickHandle}
        className="cursor-pointer flex flex-row justify-between w-full"
      >
        <div className="text-neutral-800 bg-neutral-200">{question}</div>
        <div>{isOpen ? "−" : "+"}</div>
      </div>
      <div
        className={`text-neutral-200 py-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {answer}
      </div>
    </div>
  );
}
