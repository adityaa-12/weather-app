import React from 'react'

const Favorite = () => {
  return (
    <div className='w-[35vw] mx-auto mt-3.5'>
      <div id="fav-container" className='flex flex-row font-medium gap-1.5 items-center'>
        <div id="input" className='w-full'>
            <input type="text" name='fav-location' id='fav-location' placeholder='Your Favorite Locations..' className='border border-stone-300 px-1.5 py-2 rounded-md w-full outline-none' />
        </div>
        <div id="btn">
            <button className='border border-stone-300 px-4.5 py-2 rounded-lg cursor-pointer hover:bg-stone-200 transition-all'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Favorite;
