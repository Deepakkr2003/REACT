import React, { useState } from "react";

const Location = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedLocation, setSelectedLocation] = useState("Select Location"); 

  const locations = ["New York", "London", "Paris", "Tokyo", "Sydney"]; 

  const handleSelect = (location) => {
    setSelectedLocation(location); 
    setIsOpen(false); 
  };

  return (
    <div className="relative w-64">
      <div
        className="p-3 cursor-pointer flex justify-between items-center text-gray-500"
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)} 
      >
        <span>{selectedLocation}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute  top-full left-0 mt-2 w-full  bg-white z-10">
          {locations.map((location) => (
            <div
              key={location}
              className="px-4 py-2  cursor-pointer"
              onClick={() => handleSelect(location)} 
            >
              {location}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location;