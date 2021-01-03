import React from 'react'
import c1 from '../../assets/img/them.png';

import Pafination from '../components/pagination';
const Index = () => {

    return (
        <div className='grid grid-cols-12 pb-20 pt-10 '>
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-2  border py-10 border-gray-200 leading-6 shadow-lg col-start-1 col-span-12  lg:col-start-2 lg:col-span-10   bg-gray-50 px-10'>

                {
                    [1, 2].map((v, k) => {

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
                                    <button className="more mx-auto w-36 text-center py-1 px-2 rounded-full sucond_color mt-3">read more</button>
                                </div>

                            </div>

                        )

                    })
                }

                {/* paginition */}
                <div className='col-span-1 sm:col-span-2 flex justify-center'>
                    <Pafination data={[1, 2, 3, 5, 6, 7, 11]} />
                </div>
                {/* .pagination */}

            </div>


        </div>
    )
}

export default Index;
