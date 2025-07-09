import React from 'react'
import WorkingCard from './WorkinCard'
import './Working.css' // Assuming you have a CSS file for styling
const Working = () => {
  return (
    <div className="service w-full min-h-screen bg-[#F2F2F2] flex flex-col md:flex-row items-center justify-center relative">
      <div className='working-content'>
        <div className='working-heading'>
          <h1>How to Install Our App</h1>
          <p>Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.</p>
        </div>

        {/* Fixed: Flex row with spans */}
        <div className='List-Of-Working flex flex-row items-center justify-center gap-4 mt-20'>
          <h5 className='text-[30px] font-semibold' style={{ color: "#FFB84D" }}>01</h5>
          <span className='inline-block w-[250px] h-[2px] bg-gray-400'></span>
          <h5 className='text-[30px] font-semibold'>02</h5>
          <span className='inline-block w-[250px] h-[2px] bg-gray-400'></span>
          <h5 className='text-[30px] font-semibold'>03</h5>
        </div>
          <div className='working-Cards '>
          <WorkingCard />
        </div>
       
      </div>
    </div>
  )
}

export default Working
