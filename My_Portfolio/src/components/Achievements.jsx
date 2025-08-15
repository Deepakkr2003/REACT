import React from 'react';

// Data for the achievements. This makes it easy to add more entries.
const achievementsData = [
  {
    title: "2★ Rating on CodeChef",
    description: "600+ problems solved.",
    date: "2024" // Placeholder date
  },
  {
    title: "1120 Max Rating on Codeforces",
    description: " 500+ problems solved.",
    date: "2024" // Placeholder date
  },
  {
    title: "Smart India Internal College Hackathon",
    description: "Achieved top honors by creating a Street Light Fault Detection Project.",
    date: "2023" // Placeholder date
  },
];

const Achievements = () => {
  return (
    // The `relative z-0` here creates a new stacking context for this section,
    // ensuring it sits below a fixed navbar which would have a higher z-index.
    <div name='achievements' className='bg-gray-900 py-16 text-white relative z-0'>
      <div className='max-w-screen-lg mx-auto p-4'>
        {/* Title Section */}
        <div>
          <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>Achievements</p>
          <p className='py-6 text-2xl font-semibold'>Noteworthy Achievements</p>
        </div>

        {/* Timeline Container for medium and large screens */}
        <div className='hidden md:block relative'>
          {/* Vertical line of the timeline */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full'></div>
          
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className={` mb-8 flex w-full items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className='w-1/2 flex justify-center'>
                <div className='w-8 h-8 rounded-full bg-orange-500 border-4 border-gray-900'></div>
              </div>
              
              {/* Achievement card */}
              <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className='bg-orange-500 text-white p-6 rounded-lg shadow-md hover:scale-105 duration-300'>
                  <h3 className='text-2xl font-bold mb-2'>{achievement.title}</h3>
                  <p className='text-lg mb-2 text-gray-200'>{achievement.description}</p>
                  <span className='text-sm italic text-gray-300'>
                    {achievement.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Container for small screens */}
        <div className='md:hidden relative'>
          {/* Vertical line of the timeline */}
          <div className='absolute left-4 w-1 bg-gray-600 h-full'></div>
          
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className={`mb-8 flex items-center w-full`}
            >
              {/* Timeline dot */}
              <div className='absolute left-1'>
                <div className='w-8 h-8 rounded-full bg-orange-500 border-4 border-gray-900'></div>
              </div>
              
              {/* Achievement card */}
              <div className='w-full p-4 pl-12'>
                <div className='bg-orange-500 text-white p-6 rounded-lg shadow-md hover:scale-105 duration-300'>
                  <h3 className='text-2xl font-bold mb-2'>{achievement.title}</h3>
                  <p className='text-lg mb-2 text-gray-200'>{achievement.description}</p>
                  <span className='text-sm italic text-gray-300'>
                    {achievement.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
