import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
const HomePage = () => {
  return (
    <>
    <div className=' bg-[#020617] overflow-y-hidden h-screen flex'>
        <Sidebar />
      <div className='flex flex-col w-full '>
        <Navbar/>
        <Feed />
      </div>
    </div>
  </>
  )
}

export default HomePage