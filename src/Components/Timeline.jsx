import React from 'react'
import { Chrono } from "react-chrono";

const Timeline = () => {
    const items = [

    {
      title: "June 4th' 2024",
      cardTitle: "Registration",
      cardDetailedText: "Registration ends on 4th June",
      media: {
        type: "IMAGE",
        source: {
          url: "/registration-300x200.jpg"
        }
      }
    }, 
    {
      title: "May 15th' 2024",
      cardTitle: "Selections",
      cardDetailedText: "Selection mails rolling out in batches from 15th May.",
      media: {
        type: "IMAGE",
        source: {
          url: "/selection.png"
        }
      }
    }, 

    {
      title: "June 10th' 2024",
      cardTitle: "Induction Ceremony",
      cardDetailedText: "Induction Ceremony Starts from 11:30 AM",
      media: {
        type: "IMAGE",
        source: {
          url: "/induction.png"
        }
      }
    }, 

    {
      title: "June 10th - July 10th' 2024",
      cardTitle: "Event Starts",
      cardDetailedText: "Event starts from June 10th(12 PM) - July 10th(12 AM)",
      media: {
        type: "IMAGE",
        source: {
          url: "/event.png"
        }
      }
    }, 
  
  ];
  return (
    <div name='Timeline' className='h-full w-screen bg-gradient-to-b from-blue-900 to-white'>
      <div className='pt-20 sm:pt-36'>
      <h1 className=" font-display mb-10 text-white sm:text-blue-900 text-center font-Vsoc text-3xl sm:text-3xl font-extrabold leading-none tracking-tight md:text-5xl  lg:text-8xl lg:mb-24">
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
