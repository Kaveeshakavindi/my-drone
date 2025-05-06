import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { PiPinwheelDuotone } from "react-icons/pi";
const items: React.ReactNode[] = [
  "SPECS",
  "VIDEO",
  "FAQ",
  <FiSearch />,
  <FiShoppingCart />,
];

export default function NavBar() {
  return (
    <div className="font-sans h-full bg-orange-700 text-yellow-50 flex p-4  flex-row justify-between items-center w-full ">
      <div className="flex italic gap-[0.5rem] items-center text-3xl  font-italic">
        <PiPinwheelDuotone />
        MINI DRONE
      </div>
      <ul className="flex flex-row w-[30%] text-sm  justify-between items-center">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
