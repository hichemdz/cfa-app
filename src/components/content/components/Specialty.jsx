import React from 'react'

const Specialty = (props) => {

    return (
        <div className='items-specoalty relative shadow-lg hover:shadow-xl hover:bg-yellow-100 bg-white order-1 border-gray-200 ' >
            <div className='border-t-4 sucond_border_color'>
                <img className='w-full h-full' src={props.img} alt="" />
                <h3 className='text-xl px-2 font-black my-3 text-center' > {props.title} </h3>
                <button className='w-1/2 mx-auto block rounded-t-full mt-3 sucond_color shadow-3 text-sm font-bold  py-2 px-5'>View More </button>
            </div>
        </div>
    )

}



export default Specialty
