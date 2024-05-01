import React from 'react'

const Registrations = () => {
  return (
    <div className='w-screen bg-blue-900'>
      <div className='flex justify-center items-center'>
        <section className='flex flex-col sm:flex-row gap-16'>
            <p className='text-xl'> <span className='pl-3 text-4xl text-yellow-700 font-Vsoc'>5000+ </span> <br /> <span className='font-Vsoc'>Registrations</span>  </p>
            <p className='text-xl'> <span className='pl-3 text-4xl text-yellow-700 font-Vsoc'>3000+ </span> <br /> <span className='font-Vsoc'>Participants</span>  </p>
            <p className='text-xl'> <span className='sm:pl-3 pl-6 text-4xl text-yellow-700 font-Vsoc'>100+ </span> <br /> <span className='font-Vsoc pl-4 sm:pl-0'>Institutes</span>  </p>
            {/* <p className='text-xl'> <span className='pl-3 text-4xl text-yellow-700 font-Vsoc'>5000+ </span> <br /> <span className='font-Vsoc'>Registrations</span>  </p> */}
        </section>
      </div>
    </div>
  )
}

export default Registrations
