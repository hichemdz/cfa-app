import React from 'react'

export default function Features(props) {
    return (
        <div className='relative  p-3 pb-6 leading-8 justify-around border-t-4 sucond_border_color shadow-lg bg-white border-1 flex' >

            <div className='mt-1 mr-3 shadow-xl border-1 bg-gray-20 rounded-full bggray-200 w-12 h-10 flex justify-center items-center'>
                <svg className=' fill-current w-6 h-6 text-gray-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <defs />
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path fill-rule="evenodd" d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z" />
                    <circle cx="9" cy="8" r="4" fill-rule="evenodd" />
                    <path fill-rule="evenodd" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                </svg>
            </div>
            <div className="w-full">
                <h5 className='text-gray-400 font-bold mb-2'>  dolor, sit amet consectetur </h5>
                <h3 className='text-2xl font-black mb-2'> Training Solutions </h3>
                <p className='text-md'>O&B's formula for managing, assessing, and training software development staff can be replicated for your organization.  </p>
            </div>

        </div>
    )
}
