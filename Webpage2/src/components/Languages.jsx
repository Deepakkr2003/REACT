import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Languages = () => {
  const [isHovered, setIsHovered] = useState(false); 

  const options = ["Hindi", "English", "French", "Spanish"]; 
  return (
    <div
      className="relative w-full max-w-md"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div className="flex justify-between z-20 items-center p-3">
        <div className="text-sm font-medium">Languages</div>
        <div className="ml-4">
          <MdKeyboardArrowDown
            size={24}
            className={`transition-transform ${
              isHovered ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {isHovered && (
        <div className="absolute  top-full left-0 mt-2 mb-2 w-full border border-gray-300 bg-gray-200 rounded-lg shadow-lg z-1000">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Languages;