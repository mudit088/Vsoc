import React from 'react'

const Partaners = () => {
  return (
    <div name='Partners' className=' w-screen h-screen flex justify-center items-center bg-gradient-to-b from-yellow-100 to-orange-50'>
      <div className='pt-12 sm:pt-24'>
    <h1 className=" font-display text-orange-900 mb-20 text-center font-Vsoc  text-3xl font-extrabold leading-none tracking-tight md:text-5xl  lg:text-6xl ">
       Partners
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center  space-x-20 pt-20 pb-5 sm:pb-20 gap-y-8">
  <img src="/ETHIndia.png" alt="ETHIndia" className="h-12 pr-1 sm:h-12 py-2 sm:py-0" />
  <img src="/Devfolio - Dark.svg" alt="Devfolio" className="h-10 sm:h-12 py-2 sm:py-0 pr-16 sm:pr-0" />
  <img src="/GMC LogoS.png" alt="LogoS" className="h-14 sm:h-16 pr-16 py-2 sm:py-0 sm:pr-0" />
  <img src="/Polygon_Primary_Dark.svg" alt="Polygon" className="h-10 sm:h-12 py-2 sm:py-0 pr-20 sm:pr-0" />
</div>

    </div>
    </div>
  )
}

export default Partaners
