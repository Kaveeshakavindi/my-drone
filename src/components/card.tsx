import { cardProps } from "@/types";

export const Card = ({ title, sub }: cardProps) => {
  return (
    <div className="border border-neutral-400 rounded-md p-4">
      <p className="text-2xl pb-4">{title}</p>
      <p className="text-neutral-500">{sub}</p>
    </div>
  );
};
