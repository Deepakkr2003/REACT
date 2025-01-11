import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Expertise = () => {
  const [isHovered, setIsHovered] = useState(false); 

  const options = ["Frontend Development", "Backend Development", "UI/UX Design", "Data Science", "DevOps"]; 
  return (
    <div
      className="relative w-full max-w-md"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div className="flex justify-between items-center  p-3 ">
        <div className=" text-sm font-medium">Select Expertise</div>
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
        <div className="absolute top-full left-0 mt-2 w-full border border-gray-300 bg-gray-200 rounded-lg shadow-lg z-10">
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

export default Expertise;