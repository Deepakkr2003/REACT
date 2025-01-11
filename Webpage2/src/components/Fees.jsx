import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Fees = () => {
  const [isHovered, setIsHovered] = useState(false); 

  const options = ["$0 - $100", "$101 - $500", "$501 - $1000", "$1001 - $5000"]; 
  return (
    <div
      className="relative w-full max-w-md"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div className="flex justify-between items-center  p-3 ">
        <div className=" text-sm font-medium">Fees</div>
        <div className="ml-4 ">
          <MdKeyboardArrowDown
            size={24}
            className={`transition-transform ${
              isHovered ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {isHovered && (
        <div className="absolute bg-gray-200 top-full left-0 mt-2 w-full border border-gray-300 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2  hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fees;