import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";

const page = () => {
  return (
    <section className='ml-5'>
      <h1 className='text-2xl text-gray-800 font-extrabold'>Dashboard</h1>
<div className='flex justify-between mt-2'> 
  <div className='flex justify-center items-center gap-1 text-gray-500'>
  <p >dashboard</p>
  <FaChevronRight/>
  </div>
  <div className='flex text-gray-500 text-md gap-1 items-center justify-center'>

<CiCalendarDate  />
<span>Feb</span>
<div>
  <span>15</span>,
  <span>2025</span>
</div>
-
<div>
  <span>30</span>,
  <span>2025</span>
</div>
  

  </div>
  
  </div>


    </section>
      )
}

export default page
