import React from 'react'


import Pafination from '../components/pagination';
import Post from './post';
const Index = () => {

    return (
        <div className='grid grid-cols-12 pb-20 pt-10 '>
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-2  border py-10 border-gray-200 leading-6 shadow-lg col-start-1 col-span-12  lg:col-start-2 lg:col-span-10   bg-gray-50 px-10'>

                {
                    [1, 2, 3].map((v, k) => <Post key={k} />)


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
