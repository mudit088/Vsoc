import React from 'react'
import { Chrono } from "react-chrono";

const Timeline = () => {
    const items = [
      {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "public/bg1.jpg"
        }
      }
    }, 

    {
      title: "May 1921",
      cardTitle: "Hello",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "public/bg1.jpg"
        }
      }
    }, 
  
  ];
  return (
    <div name='Timeline' className='h-screen w-screen bg-gradient-to-b from-blue-900 to-white'>
      <div className='pt-36'>
      <h1 className=" font-display text-blue-900 text-center font-Vsoc  text-3xl font-extrabold leading-none tracking-tight md:text-5xl  lg:text-8xl lg:mb-24">
       Timeline
      </h1>
      </div>
    <div className='flex justify-center items-center '>
      <div className=' ' style={{ width: '500px', height: '700px' }}>
         <Chrono items={items} mode="VERTICAL" />
</div>
    </div>
    </div>
    
  )
}

export default Timeline
