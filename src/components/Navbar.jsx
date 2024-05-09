import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800 py-5 flex  gap-4'>
        <div className='w-1/2 flex justify-start items-start ml-10'>
        <h1 className='text-white font-bold '>Media <span className='text-amber-400'>Processing.</span></h1>
        </div>
        
        <div className='w-1/2 flex gap-4 items-end justify-end mr-10'>
        <h1 className=' font-bold text-white hover:text-amber-500 '>
        <a href="/">Home</a>
      </h1>
      <h1 className=' font-bold text-white hover:text-amber-500 '>
        <a href="/about">About</a>
      </h1>
        </div>
      
    </div>
  )
}

export default Navbar