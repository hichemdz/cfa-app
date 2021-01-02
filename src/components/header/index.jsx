import React from 'react'
import './app.css';
//import  img  from './img.png' ;
const Header = () => {

    return (


        <main className=' overflow-hidden pb-32 text-white  '>


            <div className="inner_hero  text-center flex flex-col h-full justify-around  mt-16 mx-auto">
                {/* <h3 className='text-xl  mb-4 text-gray-700 font-semibold '>  Institut national spécialisé de formation  </h3>   */}
                <h1 className='text-4xl  sm:text-5xl   sm:px-16 md:text-6xl  md:px-5 leading-normal md:leading-relaxed mt-5  mb-5 font-black '>Institut national spécialisé de  <span className='sucond_color ml-1' >formation</span> </h1>

                <p className='px-5 text-md text-center  mb-8 leading-7  font-normal text-gray-300'>
                    O&B's Java and Agile training courses were developed using knowledge gained from real-world software development projects. We offer classes in Java, Spring, Hibernate, Agile, and other related technologies.
                    </p>
                <div>
                    <button className='more  px-10 relative sucond_color rounded-full bg-transparent text-yellow-0 shadow-0 text-sm font-bold  py-3 px-5'> Start Now </button>

                </div>
            </div>




        </main>

    )
}

export default Header 