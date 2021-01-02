import React from 'react'

export default function Testimonials(props) {
    return (
        <div className={'p-5 items_testimonials justifay-around   flex items-center    ext-gray-500 ' + (props.id === props.count ? 'block' : 'hidden')}>
            <div className='md:p-5 lg:w-1/2 m-auto text-center'>
                <svg className='fill-current m-auto w-16 h-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z" /></svg>
                <p className='mb-3 leading-8  text-lg font-bold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas magni vitae amet nulla, nobis sit delectus autem at beatae quasi, iste error consequatur iure quam.
            </p>
                <div>
                    <h3 className='text-md leading-6 sucond_color font-black'>Damion & Melamcia Johson</h3>
                    <span className='text-xs text-gray-500' >On Facebook  </span>
                </div>
            </div>

        </div>
    )
}
