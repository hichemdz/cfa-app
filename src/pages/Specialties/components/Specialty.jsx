import React from 'react'

import { Link } from 'react-router-dom'
const Specialty = ({ img }) => {
    return (
        <div className='flex flex-col lg:flex-row shadow-lg border bg-gray-100 mb-5'>
            <div className='mr-3 hidden md:block mb-3 lg:mb-0'>
                <img className='w-full lg:h-full' src={img} alt="" />
            </div>
            <div className='w-full flex  text-center sm:text-left  flex-col  justify-around p-2'>
                <h3 className='text-gray-500 mb-1'>SCHOOL OF DATA SIENCE</h3>
                <h2 className='font-black mb-1 '>Data Engineer</h2>
                <p className='text-gray-500 mb-1 lg:mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis quae laudantium error perferendis natus suscipit, voluptates deleniti. Eveniet, vitae ipsa aut libero nesciunt beatae sapiente sit consequatur aliquam temporibus!
            </p>
                <span className='mb-1'>
                    10 / 15 /2020
            </span>
                <Link to='/specialties/spesialt_one_id' className='sm:text-left rounded-full  sucond_color shadow-3 text-sm font-bold py-2  '> Go to specialty </Link>
            </div>
        </div>
    )
}

export default Specialty;