import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Navbar = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-b from-blue-900 to-white'>
      <div className='p-5'>
        <img className='h-28' src="/IMG_4259 2.png" alt="" />
      </div>

      <div className='flex'>

      <div className=" font-Vsoc text-gray-800 m-10 md:m-0 pt-16 md:pt-36 md:text-3xl duration-500">
          <TypeAnimation className='ml-8'
            sequence={[
              'Vinyasa Club Presents...',
              3000,
            ]}
            // wrapper="span"
            speed={150}
            style={{ fontSize: '2em', display: 'inline-block' }}
            // repeat={Infinity}
            duration={500}
          />
           <p className=' font-Vsoc ml-64 mt-10 text-gray-800 text-6xl'>VSOC</p>
          
        </div>
        
           
        
        <div className='flex justify-center items-center mt-72'>

        <button className=' px-8 py-2 bg-gradient-to-b from-white font-Vsoc to-blue-900 rounded-xl hover:scale-110 duration-300'>Register</button>
        <button className=' px-10 py-2 bg-gradient-to-b from-white font-Vsoc to-blue-900 ml-5 rounded-xl hover:scale-110 duration-300'>
          <ul>
            <li>
              <a href="" ><img className='w-6' src="/discord.png" alt="" /></a>
            </li>
          </ul>
        </button>
        </div>
        <div>
        <img className='ml-28 hover:transform -skew-x-10 -skew-y-20' src="/Hero_Image_Lite_Theme.svg" alt="" />

        <p className='text-xl font-Vsoc font-semibold ml-80 pl-10'>Vinyasa Summer of Code</p>
        </div>
        </div>
    </div>
  )
}

export default Navbar
