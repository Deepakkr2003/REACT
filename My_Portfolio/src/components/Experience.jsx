import React from 'react'

function Experience() {
  return (
    
    <div name='experience' className='bg-gradient-to-b
    from-gray-800 to-black w-hull h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
      <div>
          <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>Experience</p>
          <p className='py-6 text-2xl font-semibold'>Hands-On Expertise & Contributions</p>
        </div>
          
       
                <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">
                            Frontend Developer intern
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Company Name - Apnasarthi Rental Solutions Private Limited
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Location</dt>
                                <dd className="mt-1 text-sm text-gray-900">Virtual (Remote)</dd>
                                <a href='/Apnasarthi.pdf' className="mt-2 block text-blue-400 hover:text-lime-400">View Certificate</a>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Responsibilities</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    • Developed the Apnasarthi website with a consistent, responsive UI, supporting a daily active user base of 1,000+
                                    and integrating a comprehensive platform for Bihar tourism and rental services.<br />
                                    • Implemented a new routing framework that improved site navigation efficiency, resulting in a 20% increase in
                                    average session duration and a notable rise in page views per visit.<br />
                                    • Rolled out enhanced Query and Review features, boosting retention by 30% and fostering collaboration.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">
                            Virtual Salesforce Developer intern
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Company Name - SalesForce
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Location</dt>
                                <dd className="mt-1 text-sm text-gray-900">Virtual (Remote)</dd>
                                <a href='/Salesforce.pdf' className="mt-2 block text-blue-400 hover:text-lime-400">View Certificate</a>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Responsibilities</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    • Developing Salesforce Solutions, Writing Apex Code<br />
                                    • Customizing Salesforce Configuration, Implementing Lightning Components & API,<br />
                                    • VS Code Setup & CLI Setup, Organizational Setup, Relationship & Process Automation,<br />
                                    • Types Of Flows & Security, Apex, Testing & Debugging
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Experience
