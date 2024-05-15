import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import './Front.css'

const Front = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <div className="h-full w-full bg-cover bg-gradient-to-b from-red-200 to-yellow-100 min-h-screen flex items-center justify-center">
      <Parallax pages={2}>
        {/* First Parallax Layer */}
        <ParallaxLayer offset={0} speed={0.5}
        onClick={()=>ReferenceError.current.scrollTo(2)}
        >
          <animated.div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl pl-5 sm:pl-0 lg:text-6xl font-bold text-orange-400 mb-4">Vinyasa Summer of Code</h1>
            <p className="text-xl text-orange-600">Learn, Code, Innovate.</p>
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start: 0.4, end :2.5}}
        >
        <img src="/baloon1bg.png" className='flex justify-center items-center h-72 align-middle mt-36 ml-12 pl-0 sm:mt-36 sm:ml-96  sm:pl-80 ' alt="" />
        </ParallaxLayer>

        {/* Second Parallax Layer */}
        <ParallaxLayer offset={1} speed={0.5}>
          <animated.div className="h-full flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-200 mb-4">Join Us This Summer</h2>
            <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-4 sm:space-x-4">
              
              <button className="px-8 py-4 bg-white text-orange-700 rounded-xl hover:scale-110 transition duration-300">Register</button>
              <a href="#" className="flex justify-center sm:py-4 py-4 items-center px-4 sm:px-8  bg-white text-orange-700 rounded-xl hover:scale-110 transition duration-300">
                <img src="/discord.png" className="w-6 mr-2" alt="Discord" />
                Discord
              </a>
              
              <div 
                  className="apply-button ml-10" 
                  data-hackathon-slug="YOUR-HACKATHON-SLUG" 
                  data-button-theme="light"
                  style={{height: 44 , width: 312 , marginLeft:10}}
                ></div>
            </div>
          </animated.div>
        </ParallaxLayer>

        {/* Background Images with Parallax */}
        <div className="relative h-screen">
      <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: -1 }}>
        <div className="absolute inset-0">
          <img
            src="/uppersun.png"
            alt="Upper Sun"
            className="w-full h-full object-cover"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} style={{ zIndex: -1 }}>
        <div className="absolute inset-0">
          <img
            src="/downsun.png"
            alt="Lower Sun"
            className="w-full h-full object-cover"
          />
        </div>
      </ParallaxLayer>
    </div>
      </Parallax>
    </div>
  );
};

export default Front;
