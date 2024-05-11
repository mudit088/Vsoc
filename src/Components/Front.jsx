import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import './Front.css'; // Import CSS file for custom styles

const Front = () => {
  const scrollStyles = useSpring({
    from: { transform: 'translate3d(0, 0, 0)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translate3d(0, -10%, 0)' });
        await next({ transform: 'translate3d(0, 0, 0)' });
      }
    },
    config: { duration: 3000 }, // Adjust animation speed as needed
  });

  const fadeInAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000, // Delay the start of the animation
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-orange-700 min-h-screen">
      {/* Parallax Container */}
      <Parallax pages={2}>
        {/* First Parallax Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1.3}
          className="flex items-center justify-center text-center relative"
          style={{
            minHeight: '100vh', // Ensure minimum height of the layer
          }}
        >
          <animated.div
            className="absolute inset-0 bg-cover"
            style={{
              ...scrollStyles,
              backgroundImage: "url('/uppersun.png')",
            }}
          >
            <animated.div style={fadeInAnimation}>
              <div className="animate-slidein1200 opacity-0 font-Vsoc mt-36 sm:mt-56">
                <h1 className="text-4xl md:text-5xl text-yellow-200 font-vsoc lg:text-6xl font-bold ">
                  Vinyasa Summer of Code
                </h1>
                <p className="text-xl font-vsoc  text-yellow-200  mt-4">
                  Learn, Code, Innovate.
                </p>
              </div>
            </animated.div>
          </animated.div>
        </ParallaxLayer>

        {/* Second Parallax Layer */}
        <ParallaxLayer
          offset={1}
          speed={0.7}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <animated.div
            className="absolute inset-0 bg-cover"
            style={{
              ...scrollStyles,
              backgroundImage: "url('/downsun.png')",
            }}
          ></animated.div>
          <animated.div style={fadeInAnimation}>
            <div className="flex justify-center items-center flex-col  mb-96">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-36 text-yellow-200 font-vsoc">
                Join Us This Summer
              </h2>
              <div
                className="apply-button"
                data-hackathon-slug="YOUR-HACKATHON-SLUG"
                data-button-theme="light"
                style={{ height: '44px', width: '312px' }}
              ></div>
              <div className='flex justify-center items-center absolute'>
                <button className='px-8 py-4 bg-gradient-to-b from-white font-Vsoc to-orange-700 rounded-xl hover:scale-110 duration-300'>Register</button>
                <button className='px-10 py-4 bg-gradient-to-b from-white font-Vsoc to-orange-700 ml-5 rounded-xl hover:scale-110 duration-300'>
                  <ul>
                    <li>
                      <a href=""><img className='w-6' src="/discord.png" alt="" /></a>
                    </li>
                  </ul>
                </button>
              </div>
              {/* Devfolio Apply Button */}
             
            </div>
          </animated.div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Front;
