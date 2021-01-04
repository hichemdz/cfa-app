import React, { useState, useEffect } from 'react';
import c1 from '../../assets/img/c1.png';
import Specialty from './components/Specialty';
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import { Link } from 'react-router-dom';
import './app.css';
const Content = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval_id = setInterval(() => setCount(count >= cous.length - 1 ? 0 : count + 1), 3000);
        return () => {
            // Stop the interval when the component unmounts. 
            // Otherwise it will keeep going and you will get an error.
            clearInterval(interval_id)
        }
    })
    const cous = [
        {
            'img': c1,
            'title': ' Spcialty  Web Developmet '
        }
        ,
        {
            'img': c1,
            'title': ' Spcialty  Moblile Developmet '
        }
        ,
        {
            'img': c1,
            'title': ' Spcialty  Desktop Developmet '
        },
        {
            'img': c1,
            'title': ' Spcialty  Infgraph Developmet '
        },

        {
            'img': c1,
            'title': ' Spcialty  Moblile Developmet '
        }
        ,
        {
            'img': c1,
            'title': ' Spcialty  Desktop Developmet '
        }
        ,
        {
            'img': c1,
            'title': ' Spcialty  Desktop Developmet '
        },
        {
            'img': c1,
            'title': ' Spcialty  Infgraph Developmet '
        },

    ]

    const Title = ({ title }) => <h3 className='text-3xl sm:text-3xl md:text-4xl font-bold mb-5 '>{title}</h3>

    return (
        <div className="content">
            <section id='distance' className='mb-20 mt-28 grid grid-cols-12'>
                <div className="col-start-2 col-span-10">

                    <Title title='Professors specialized with extensive experience' />
                    <p className='leading-7 text-md '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, impedit repellat! Laboriosam fugiat ab excepturi consectetur consequuntur, corporis adipisci exercitationem, sint culpa facere in! Consequatur alias magni obcaecati pariatur nam?</p>
                    <button className='rounded-full mt-5 more sucond_color shadow-3 text-sm font-bold  py-3 px-5'> View more Detialse</button>
                </div>
            </section>

            <section id='spcialty' className='mb-20 grid grid-cols-12 '>
                <div className="col-start-2 col-span-10 text-center">

                    <Title title='Specializations of our institute' />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-10 gap-y-12">
                        {
                            cous.map((v, k) => <Specialty img={v.img} title={v.title} key={k} />)
                        }


                    </div>
                    {/* show more */}
                    <Link to='/specialties' className='inline-block rounded-full   mt-20 bg-transparent sucond_color shadow-3 text-sm font-bold    px-5'>
                        <svg className='fill-current w-16 h-16 sucond_color' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </Link>
                </div>
            </section>

            <section id='features' className='mb-32 mt grid grid-cols-12'>
                <div className="col-start-2  col-span-10">

                    <Title title='Specializations of our institute' />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                        {
                            [1, 2, 3].map((v, k) => <Features key={k} />)
                        }

                    </div>


                </div>
            </section>

            <section id='posts' className='mb- grid grid-cols-12'>

                <div className=" col-start-2  gap-10 col-span-10 text-center">
                    <div className='text-center' >

                        {
                            [1, 2, 3, 6].map((v, k) => {
                                return <div className={'flex mb-10 ' + ((k + 1) % 2 === 0 ? 'flex-row-reverse' : '')}>
                                    <div className='lg:-32   w-full'>
                                        <h3 className='text-4xl title_posts relative font-bold mb-8 '>Specializations of our institute </h3>
                                        <p className='leading-8'>
                                            If you want to create mission-critical systems, take your products to market quickly, and maintain a clean code base -then you need great developers.
                                            Adopt what we've learned from decades of providing software engineering solutions.
                                    </p>
                                        <Link to='' className='inline-block rounded-full mt-5 sucond_color shadow-3 text-sm font-bold  py-3 px-5'> View more Detialse</Link>
                                    </div>

                                    <div className='hidden lg:flex w-full   justify-center '>
                                        <img className='img_about border-4 brder-yellow-500 rounded-full' src={c1} alt="" />
                                    </div>
                                </div>
                            })
                        }

                    </div>
                    {/* show more */}
                    <Link to='/blog' className='inline-block rounded-full mx-auto  mt-0 bg-transparent sucond_color shadow-3 text-sm font-bold    px-5'>
                        <svg className='fill-current w-16 h-16 sucond_color' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </Link>
                </div>
            </section>

            <section id="testimonials" className='mb- bg-gray- grid  grid-cols-12'>
                <div className="col-start-2 grid grid-rows-1 gap-10 col-span-10 ">

                    <div className="inner_testimonials ">

                        {
                            cous.map((vl, id) => <Testimonials key={id} id={id} count={count} />)
                        }
                    </div>



                </div>
            </section>

        </div>
    )
}

export default Content;