"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Dropdown = ({
  initial,
  options,
}: {
  initial: string;
  options: string[];
}) => {
  const [active, setActive] = useState(initial);

  return (
    <label htmlFor={initial}>
      <div className="bg-neutral-100 relative p-1 px-1.5 rounded-xl transition hover:shadow-lg min-h-6 cursor-pointer">
        <div className="flex justify-between items-center peer">
          <input
            type="checkbox"
            name={initial}
            id={initial}
            className="hidden peer"
          />
          <span className="peer-[:checked]:opacity-0 transition">{active}</span>
          <FaChevronDown className="peer-[:checked]:-rotate-180 transition z-20" />
        </div>
        <div className="flex flex-col absolute w-full top-0 left-0 py-1 px-1.5 gap-y-2 opacity-0 h-0 pointer-events-none peer-has-[:checked]:pointer-events-auto peer-has-[:checked]:opacity-100 peer-has-[:checked]:h-auto transition-all bg-neutral-100 z-10 rounded-2xl shadow-md">
          {options.map((option) => (
            <span key={option}>{option}</span>
          ))}
        </div>
        <div className="flex flex-col gap-y-2 opacity-0 h-0 pr-6 -z-0 pointer-events-none">
          {options.map((option) => (
            <span key={option}>{option}</span>
          ))}
        </div>
      </div>
    </label>
  );
};

export default Dropdown;
