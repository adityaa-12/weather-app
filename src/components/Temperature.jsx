import React from 'react'

const Temperature = () => {
  return (
    <div className='w-[75vw] mx-auto mt-3.5'>
      <div id="show-temp-card" className='border border-stone-700 w-fit px-1.5 py-2.5 rounded-lg flex flex-col gap-1.5'>
        <div id="location">
            <span className='bg-stone-700 rounded-lg px-2.5 py-1.5 flex w-fit font-medium'>Mumbai</span>
        </div>
        <div id="date" className='flex flex-col'>
            <span id="day" className='text-xl font-semibold'>Monday</span>
            <span id="date" className='text-md text-stone-400 font-medium'>25 Dec 2020</span>
        </div>
        <div id="temp-icon" className='flex flex-row gap-3.5'>
        <div id="temp" className='flex flex-row items-start'>
            <span className='text-6xl font-semibold'>89</span><sub className='text-xl font-medium'>°C</sub>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Temperature;
