import { PiPinwheelDuotone } from "react-icons/pi";

export default function NavBar() {
  return (
    <div className="font-[var(--font-russo)] bg-orange-600 text-neutral-100 flex p-4  flex-row justify-between items-center w-full ">
      <div className="flex italic gap-[0.5rem] items-center text-3xl  font-italic ">
        <PiPinwheelDuotone />
        EMBER
      </div>
    </div>
  );
}
