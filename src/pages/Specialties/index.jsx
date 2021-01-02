import React, { useState } from 'react'
import c1 from '../../assets/img/c1.png';
import Specialty from './components/Specialty';
const Index = () => {
    const categories = ['All specialties', 'Residence', 'Apprenticeship']
    const [show, setShow] = useState(true)
    const [category, setcategory] = useState(0)
    const toggle = () => setShow(!show)
    const togglCate = (cat) => {
        setcategory(cat)

    }

    return (
        <div className='grid grid-cols-12  mt-10'>
            <div className='col-start-2 col-span-10'>
                {/* header */}
                <div className='text-center'>
                    <h1 className='mb-10 text-4xl font-normal text-gray-500'>Program Catalog</h1>
                    <div className='bg-white w-1/2 m-auto rounded-lg flex items-center shadow-lg'>
                        <input className='w-full p-3 g-red-200' type="text" name="" id="" />

                        <button className='px-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                        </button>
                    </div>

                </div>
                {/* content */}
                <div className='grid grid-cols-4 gap-4 bg-white mt-10 p-5'>
                    {/* content felter */}
                    <div className='col-span-1 bg-gray-200'>
                        <span className={'block border-1 border-gray-300 lg:hidde bg-gray-900  text-gray-200  p-5 '} > {categories[category]}</span>
                        <ul className='flex  flex-col m:flex-row'>
                            {
                                categories.map((v, k) => <li className={'border-b w-full border-1 border-gray-300   p-3 mr-3 text-sm' + (category === k ? ' bg-gray-300' : ' bg-gray-100')} key={k} onClick={() => togglCate(k)}>{v}</li>
                                )
                            }


                        </ul>
                    </div>

                    {/* content Specailties */}
                    <div className="container_specialties  col-span-3">
                        {/* item specialty */}
                        {
                            [1, 2, 3, 6, 5, 8, 8, 8,].map((v, k) => <Specialty key={k} img={c1} />
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Index;
