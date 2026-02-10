import React from "react";

function Experience() {
  return (
    <div className="mt-10 md:8 w-full  ">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-b border-black/10 dark:border-white/10 pb-2">
        Exprience
      </h2>      <div className="backdrop-blur-md bg-white/10 border-x-4 border dark:bg-black/20  border-black/20 dark:border-white/10 rounded-xl p-5 mb-4 shadow flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
          {/* Company Icon */}
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQGh716cqJsNaQ/company-logo_200_200/company-logo_200_200/0/1630537688188/branding_cataly_logo?e=2147483647&v=beta&t=zQz-CdALEUY8B_8agBfzJNJtVABHxZnR2se1WhdptpY"
            alt="Branding Catalyst Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <span className="text-lg font-semibold text-black dark:text-white">Branding Catalyst Pvt. Ltd.</span>
            <span className="text-xs text-gray-600 dark:text-gray-300 mt-1 md:mt-0">June 2025 - September 2025</span>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-200 mt-2">
            Software Developer Intern
          </div>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Worked on full-stack web applications using MERN stack.</li>
            <li>Collaborated with cross-functional teams to deliver scalable solutions.</li>
            <li>Implemented modern UI/UX with React and Tailwind CSS.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
