import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Front = () => {
  return (
    <div className="h-screen animate-slidein300 opacity-0 w-screen bg-[url('/sunfullbg.png')] bg-cover">

      <div className='flex flex-col sm:flex-row sm:flex justify-center items-center'>
               <img src="/birds2bg.png" className='h-24 animate-pulse' alt="" />
      <div className=" font-Vsoc animate-slidein500 opacity-0 text-gray-800 m-10 md:m-0 pt-10 md:pt-36 md:text-3xl duration-500">
          <TypeAnimation className='ml-20  '
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
           <p className=' font-Vsoc ml-20 mt-2 sm:mt-10 text-gray-800 animate-slidein1200 opacity-0 text-5xl sm:text-6xl'>Vinyasa Summer of Code</p>
          
        </div>
        <div>
          <img src="/sun.png" alt="" className='h-36 ml-64 animate-pulse' />
        </div>
        
           
        
        {/* <div className='flex justify-center items-center mt-14 sm:mt-72'>

        <button className=' px-8 py-2 bg-gradient-to-b from-white font-Vsoc to-blue-900 rounded-xl hover:scale-110 duration-300'>Register</button>
        <button className=' px-10 py-2 bg-gradient-to-b from-white font-Vsoc to-blue-900 ml-5 rounded-xl hover:scale-110 duration-300'>
          <ul>
            <li>
              <a href="" ><img className='w-6' src="/discord.png" alt="" /></a>
            </li>
          </ul>
        </button>
        </div> */}
        <div>
        {/* <img className='ml-6 sm:ml-10 w-80 sm:w-full mt-16 sm:mt-0 hover:transform -skew-x-10 -skew-y-20' src="/Hero_Image_Lite_Theme.svg" alt="" /> */}

        {/* <p className='text-xl sm:text-2xl font-Vsoc animate-slidein font-semibold ml-12 sm:ml-64 pl-8'>Vinyasa Summer of Code</p> */}
        </div>
        </div>
        <img src="/treebg.png" className='flex justify-end float-right animate-slidein1800 opacity-0' alt="" />
    </div>
  )
}

export default Front
