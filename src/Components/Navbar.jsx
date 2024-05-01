import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [Nav, setNav] = useState(false);
    const links = [
      { id: 1, link: 'About' },
      { id: 2, link: 'Timeline' },
      { id: 2, link: 'Partners' },
     
    ];
  return (
    <div className=' w-screen bg-blue-900 '> 
    <div className='flex justify-around'>
        <div className='flex justify-center items-center   '>
        <img src="/IMG_4259 2.png" alt="Logo" className="h-32  " />

        <ul className="hidden sm:flex justify-center  items-center">
          {links.map(({ id, link }) => (
            <li key={id} className="px-8 cursor-pointer capitalize text-xl font-Vsoc text-white hover:scale-105 duration-200 ">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        </div>
        <div onClick={() => setNav(!Nav)} className="cursor-pointer  m-4 mt-10 z-10 text-gray-500 md:hidden">
          {Nav ? <FaTimes size={50} /> : <FaBars size={50} />}
        </div>
        </div>

        {Nav && (
          <ul className="flex flex-col duration-300 justify-center  items-center scroll-m-0 top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-900 to-white text-black">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer duration-500 capitalize py-6 text-2xl">
                <Link onClick={() => setNav(!Nav)} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default Navbar
