import React from 'react'
import c1 from '../../assets/img/them.png';
import { Link } from 'react-router-dom';
const Post = () => {
    return (
        <div className=' bg-gray-100 pb-5 px-3 shadow-lg flex-col mb-8'>
            <div className='w-full mb-3  mr-3'>
                <img className='w-full h-full' src={c1} alt="" />
            </div>
            <div className='px- flex flex-col '>
                <h3 className='sucond_color mb-2 font-black'>2021 Workplace Learning Report: The Skills Defining the Future of Work </h3>
                <p className='text-sm  text-gray-700'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aliquid reiciendis aut doloribus nemo exercitationem autem? Autem, aut aliquid ipsa illum reprehenderit suscipit rerum temporibus, incidunt, sequi neque odit a!
            </p>
                <Link to='/blog/1' className="inline-block more mx-auto w-36 text-center py-1 px-2 rounded-full sucond_color mt-3">read more</Link>
            </div>

        </div>
    )
}

export default Post
