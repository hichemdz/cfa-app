import React from 'react'
import './app.css';
//import  img  from './img.png' ;
export default function index() {
    return (
        <header className='overflow-hidden pb-32 text-white  '>
            
                  <nav className="border-b border-gray-800 col-span-12  grid grid-cols-12 py-3 ">
                      <div className="col-start-2 col-span-10 flex items-center text-gray-200   justify-between">
                            <span  className='font-black text-4xl w-full' href="">CFA</span>
                            <ul className='  items-center justify-between hidden md:flex'>
                                <li className='mr-3'><span className='p-3' > Specialt </span></li>
                                <li className='mr-3'><span className='p-3' > About </span></li>
                                <li className='mr-3'><span className='p-3' > Contact </span></li>
                                <li className=''><span className='p-3' > Blog </span></li>
                            </ul>
                           
                            {/* <ul className="flex text-s ">
                                <li className='mr-1'><span className='rounded p-3 ' href="">SginIn</span></li>
                                <li className=''><span className='rounded p-3 ' href="">LogIn</span></li>
                            </ul> */}

                          <button className='menu rounded '>
                           <svg className='fill-current text-gray-900 md:hidden w-6 h-6' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                          </button>
                        </div> 
                          
                     
                  </nav>
               
                <div className="inner_hero  text-center flex flex-col h-full justify-around  mt-16 mx-auto">
                    {/* <h3 className='text-xl  mb-4 text-gray-700 font-semibold '>  Institut national spécialisé de formation  </h3>   */}
                    <h1 className='text-4xl  sm:text-5xl   sm:px-16 md:text-6xl  md:px-5 leading-normal md:leading-relaxed mt-5  mb-5 font-black '>Institut national spécialisé de <span className='sucond_color ml-1' >formation</span> </h1>
                   
                    <p className='px-5 text-md text-center  mb-8 leading-7  font-normal text-gray-300'>
                    O&B's Java and Agile training courses were developed using knowledge gained from real-world software development projects. We offer classes in Java, Spring, Hibernate, Agile, and other related technologies. 
                    </p>
                    <div>
                      <button className='z-50  px-10 relative sucond_color rounded-full bg-transparent text-yellow-0 shadow-0 text-sm font-bold  py-3 px-5'> Start Now </button>
                    </div>
                </div>
                    
                     
                  
              
        </header>
    )
}

