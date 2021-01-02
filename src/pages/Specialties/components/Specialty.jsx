import React from 'react'

const Specialty = ({ img }) => {
    return (
        <div className='flex flex-col lg:flex-row shadow-lg border bg-gray-100 mb-5'>
            <div className='mr-3 hidden md:block mb-3 lg:mb-0'>
                <img className='w-full' src={img} alt="" />
            </div>
            <div className='w-full flex  text-center sm:text-left  flex-col  justify-around p-2'>
                <h3 className='text-gray-500 mb-3 lg:mb-0'>SCHOOL OF DATA SIENCE</h3>
                <h2 className='font-black mb-3 lg:mb-0'>Data Engineer</h2>
                <p className='text-gray-500 mb-3 lg:mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis quae laudantium error perferendis natus suscipit, voluptates deleniti. Eveniet, vitae ipsa aut libero nesciunt beatae sapiente sit consequatur aliquam temporibus!
            </p>
                <span className='mb-3 lg:mb-0'>
                    10 / 15 /2020
            </span>
                <button className='sm:text-left rounded-full  sucond_color shadow-3 text-sm font-bold py-2  '> Go to specialty </button>
            </div>
        </div>
    )
}

export default Specialty;