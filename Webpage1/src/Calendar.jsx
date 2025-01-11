import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the DatePicker styles
import { FaRegCalendar } from "react-icons/fa"; // Import the calendar icon

const Calendar = () => {
  const [startDate, setStartDate] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Calendar Icon */}
      <div
        className="border border-gray-400 rounded-full p-2 mt-2 cursor-pointer hover:scale-105 transition"
        onClick={() => setIsOpen(!isOpen)} // Toggle calendar visibility
      >
        <FaRegCalendar />
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 z-10 right-1 bg-white shadow-lg rounded-md">
          <DatePicker
            selected={startDate} // The selected date
            onChange={(date) => {
              setStartDate(date); // Update the selected date
              setIsOpen(false); // Close the calendar
            }}
            inline // Show the calendar inline
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;