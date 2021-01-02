import React, { useEffect } from 'react'

import c1 from '../../../assets/img/them.png';
const ItemSpescialty = ({ match }) => {
    useEffect(() => {
        console.log('=====> ', match);
    }, [])
    const style = {
        transform: 'translate(-50%,-50%)'
    }
    const content = {
        width: '902px'
    }
    return (
        <>
            <main className='grid grid-cols-12  '>
                <div className='grid grid-cols-8 gap-2 col-start-2 col-span-10 py-10'>
                    <div className='col-span-5 py-5 flex flex-col justify-center g-gray-900'>


                        <h3 className='mb-3 text-sm text-gray-400 font-bold sucond_color'>Developent - Back End</h3>
                        <h1 className='mb-5 text-3xl text-gray-200 font-black uppercase ' > JavaScript Features Critical to Understand </h1>
                        <h5 className='mb-5 text-md font-semibold text-gray-200 '>  Important JavaScript Concept and Features Every Developer Should Know  </h5>
                        <p className='text-gray-200 mb- text-sm font-bold leading-7 '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, eum rerum quasi rem officiis sunt quisquam error id, at quas quibusdam modi dolores. Saepe ipsa nostrum explicabo cumque deserunt sit ullam! Excepturi sequi nulla labore.
                           </p>
                    </div>
                    <div className='relative bg-red-200 col-start-6 col-span-3 shadow-lg ' >
                        <img className='w-full h-full' src={c1} alt="" />

                        <button className='bg-yellow-0 p-2 rounded-full play_video absolute top-1/2 left-1/2 ' style={style}>
                            <svg className='fill-current sucond_color w-12 h-12' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </main>
            <div className="content mt-10">
                <section className='grid grid-cols-12 mb-10'>
                    <div className='mx-auto border border-gray-200 leading-6 shadow-lg grid-cols-8 col-start-2 col-span-10  bg-gray-50 p-10 ' style={content}>

                        <h1 className='font-black text-2xl mb-6'>What You learn</h1>
                        <ul className=' grid   grid-cols-2 gap-4 text-md font-semibold '>

                            {
                                [1, 2, 3, 4, 5, 6].map((v, k) => {
                                    return <li className='flex '>
                                        <div className=''>
                                            <svg className='fill-current sucond_color w-8 h-8' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>
                                        </div>
                                        <div className='w-full   text-gray-700 px-5'>

                                            How to use Docker Containers and Docker Compose on your machine for better software building and testing.
                                        </div>
                                    </li>
                                })
                            }



                        </ul>
                    </div>
                </section>

                <section className='grid grid-cols-12 mb-10'>
                    <div className='mx-auto border-1 border-gray-30 leading-6 shadow-l grid-cols-8 col-start-2 col-span-10  g-gray-200 px-10 ' style={content}>

                        <h1 className='font-black text-2xl mb-6'>Requiremt</h1>
                        <ul className=' grid  grid-cols-1 gap-3 text-mm font- '>

                            {/* { */}
                            {/* // [1].map((v, k) => { */}
                            {/* return ( */}
                            <li className='flex items-center'>
                                <div className='mr-3'>
                                    <svg className='fill-current sucond_color w-5 h-5' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none" /><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div className='w-full text-gray-900 text-sm '>

                                    No paid software required - Just install your favorite text editor and browser!
                                 </div>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-3'>
                                    <svg className='fill-current sucond_color w-5 h-5' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none" /><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div className='w-full text-gray-900 text-sm '>
                                    Local admin access to install Docker for Mac/Windows/Linux.
                                  </div>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-3'>
                                    <svg className='fill-current sucond_color w-5 h-5' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none" /><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div className='w-full text-gray-900 text-sm '>
                                    Have a GitHub and Docker Hub account.
                                  </div>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-3'>
                                    <svg className='fill-current sucond_color w-5 h-5' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none" /><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div className='w-full text-gray-900 text-sm '>
                                    Knowledge of Git and Linux will be preferred but NOT required.
                                  </div>
                            </li>





                            {/* ) */}
                            {/* // }) */}
                            {/* // } */}



                        </ul>
                    </div>
                </section>

                <section className='grid grid-cols-12 mb-10'>
                    <div className='mx-auto border-1 border-gray-30 leading-6 shadow-l grid-cols-8 col-start-2 col-span-10  g-gray-200 px-10 mb-10' style={content}>

                        <h1 className='font-black text-2xl mb-6'>Description</h1>

                        <div className='mb-3'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus repellat animi deleniti eaque doloribus ex aliquam dolorem dicta possimus, modi maiores, exercitationem, incidunt consequuntur quo in odio ullam non numquam officiis minima dolorum ad est veritatis. Totam voluptates eum soluta, veniam at sit. Ratione.
                            </p>
                        </div>
                        <ul className='p-3 grid  mb-3  grid-cols-1 gap-3 text-mm font- '>

                            {/* { */}
                            {/* // [1].map((v, k) => { */}
                            {/* return ( */}
                            <li className='flex items-center'>
                                <div className='mr-3'>
                                    <svg className='fill-current sucond_color w-2 h-2' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none" /><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div className='w-full text-gray-900 text-sm '>

                                    No paid software required - Just install your favorite text editor and browser!
                                 </div>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-3'>
                                    <svg className='fill-current sucond_color w-2 h-2' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none" /><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div className='w-full text-gray-900 text-sm '>
                                    Local admin access to install Docker for Mac/Windows/Linux.
                                  </div>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-3'>
                                    <svg className='fill-current sucond_color w-2 h-2' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none" /><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div className='w-full text-gray-900 text-sm '>
                                    Have a GitHub and Docker Hub account.
                                  </div>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-3'>
                                    <svg className='fill-current sucond_color w-2 h-2' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M0 0h24v24H0z" fill="none" /><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div className='w-full text-gray-900 text-sm '>
                                    Knowledge of Git and Linux will be preferred but NOT required.
                                  </div>
                            </li>





                            {/* ) */}
                            {/* // }) */}
                            {/* // } */}



                        </ul>

                        <div className='mb-3'>
                            <h4 className='font-bold mb-2'>Why shall we learn Docker technologies:</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus repellat animi deleniti eaque doloribus ex aliquam dolorem dicta possimus, modi maiores, exercitationem, incidunt consequuntur quo in odio ullam non numquam officiis minima dolorum ad est veritatis. Totam voluptates eum soluta, veniam at sit. Ratione.
                            </p>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-bold mb-2'>Docker is becoming a must tool for developers:</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus repellat animi deleniti eaque doloribus ex aliquam dolorem dicta possimus, modi maiores, exercitationem, incidunt consequuntur quo in odio ullam non numquam officiis minima dolorum ad est veritatis. Totam voluptates eum soluta, veniam at sit. Ratione.
                            </p>
                        </div>

                        <div className='mb-3'>
                            <h4 className='font-bold mb-2'>Why shall we learn Docker technologies:</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus repellat animi deleniti eaque doloribus ex aliquam dolorem dicta possimus, modi maiores, exercitationem, incidunt consequuntur quo in odio ullam non numquam officiis minima dolorum ad est veritatis. Totam voluptates eum soluta, veniam at sit. Ratione.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default ItemSpescialty;