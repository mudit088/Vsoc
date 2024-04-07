import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Navbar = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-b from-blue-900 to-white'>
      <div className='p-5'>
        <img className='h-28' src="/IMG_4259 2.png" alt="" />
      </div>
      <div className="flex justify-center items-center font-Vsoc text-gray-800 m-10 md:m-0 pt-16 md:pt-36 md:text-3xl duration-500">
          <TypeAnimation
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
          
        </div>
        <div>
            <p className='flex justify-center items-center font-Vsoc text-gray-800  mt-10 text-6xl'>VSOC</p>
        </div>
        <div className='flex justify-center items-center mt-10'>

        <button className=' px-14 py-4 bg-gradient-to-b from-white font-Vsoc to-blue-900 rounded-xl hover:scale-110 duration-300'>Register</button>
        </div>
    </div>
  )
}

export default Navbar
