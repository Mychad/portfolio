import { MdNightsStay } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SocialLinks() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [showNavLinks, setShowNavLinks] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark');
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleSetTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  function toggleNavLinks() {
    setShowNavLinks(prev => !prev);
  }

  return (
    <div className=' fixed flex-col  bottom-5 right-5 p-2 left-5 cursor-pointer transition-all duration-300 md:w-fit md:left-1/2 md:-translate-x-1/2'>

      <div className="flex flex-col p-2 rounded-full backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/10 transition-all duration-300">

        {/* Icon section */}
        <div className="flex justify-center  gap-2">
          <Link to="/" className="">
            <IoHome className="w-6 h-6 hover:scale-110 transition-transform" />
          </Link>
          <div className='w-[1px] bg-black/20 dark:bg-white/20'></div>
          <FaGithub className="w-6 h-6 hover:scale-110 transition-transform" onClick={() => window.open('https://github.com/Mychad', '_blank')} />
          <div className='w-[1px] bg-black/20 dark:bg-white/20'></div>
          <div className='w-[1px] bg-black/20 dark:bg-white/20'></div>
          <FaLinkedin className="w-6 h-6 hover:scale-110 transition-transform" onClick={() => window.open('https://www.linkedin.com/in/mohammed-kadiwal-527971320', '_blank')} />
          <div className='w-[1px] bg-black/20 dark:bg-white/20'></div>
          <MdEmail className="w-6 h-6 hover:scale-110 transition-transform" onClick={() => window.open('mailto:mkadiwal304@gmail.com', '_blank')} />
          <div className='w-[1px] bg-black/20 dark:bg-white/20'></div>
          {theme === 'light' ? (
            <MdWbSunny onClick={handleSetTheme} className="w-6 h-6 hover:scale-110 transition-transform" />
          ) : (
            <MdNightsStay onClick={handleSetTheme} className="w-6 h-6 hover:scale-110 transition-transform" />
          )}
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
