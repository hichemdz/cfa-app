import React from 'react'
import './app.css';
export default function index() {
    return (
     
    <footer className='grid grid-cols-12 bg-gray-900 text-gray-500 '>
         <div className="pt-10 col-start-2 col-span-10">
            <div className='grid grid-cols-1 md:grid-cols-12  lg:grid-cols-12 gap-2 md:gap-5'>
                <div className="md:col-span-8 g-red-300 sm:b-red-200">
                    <h3 className='font-black mb-2 text-gray-200'>ABOUT O&B UNIVERSITY</h3>
                    <p className=' leading-8 footer_aboute '>
                    We are the trusted Java development consulting and training center in the Philippines. We developed these courses to address the need for well-trained Java developers who can not only build web applications, but have a good grasp of the requirements and environment for enterprise systems development. 
                    </p>
                </div>
                <div className="col-span-2 md:col-span-4 ">
                    <h3 className='font-black mb-2 text-gray-200'>ABOUT</h3>
                    <ul className='sucond_color flex md:flex-col'>
                        <li className='mb-2 mr-2'>Our Story</li>
                        <li className='mb-2 mr-2'> Our Mission</li>
                        <li className='mb-2 mr-2'>Our People</li>
                    </ul>
                </div>
                <div className="col-span-2 hidden lg:block ">
                </div>
                <div className="md:col-span-12 lg:col-span-3 g-red-200">
                    <h3 className='font-black mb-2 text-gray-200'>Contact Us</h3>
                    <p className='block text-md mb-2'>Philippines: 3rd Floor, CJV Building 108 </p>
                    <p className='block mb-2'>Aguirre Street, Legaspi Village, Makat</p>
                    <p className='block mb-2'>City, Philippines 1229</p>
                    <ul className='mt-2 '>
                        <li className='flex justify-start mb-2'>
                          <div className='mr-2'>
                              <svg className='fill-current text-gray-300' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"/></svg>
                         </div>
                          <div>(63) 2 8894-3415 </div>
                        </li>
                        <li className='flex justify-start mb-2'>
                           <div className='mr-2'>
                           <svg className='fill-current text-gray-300' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"/></svg>
                           </div>
                          <div>(63) 2 8894-3415 </div>
                        </li>
                        <li className='flex justify-start'>
                           <div className='mr-2'>
                           <svg className='fill-current text-gray-300' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"/></svg>
                           </div>
                          <div>(63) 2 8894-3415 </div>
                        </li>
                    </ul>
                </div>
            </div> 
            <div className='flex  justify-between items-center mt-8 pt-7 pb-7 border-t-2 border-gray-800'>
               <div className='copyWrite'>
                 <p>© 2020 Orange & Bronze University. All rights reserved. </p>
               </div>
               <div className='socailMedia'>
                  <button className='mr-3'>
                     <svg className='fill-current text-blue-400 w-6 h-6' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/></svg>
                  </button>

                  <button className='mr-3'>
                     
                     <svg className='fill-current text-blue-300 w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <defs/>
                        <path d="M21.534 7.113C22.51 6.42 23.331 5.555 24 4.559v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z"/>
                    </svg>

                  </button>

                  <button className='mr-3'>
                    <svg className='fill-current text-gray-300 w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <defs/>
                        <path fill="#f44336" d="M12 24c6.624 0 12-5.376 12-12S18.624 0 12 0 0 5.376 0 12s5.376 12 12 12zm4.283-12.857h1.718V9.426h1.718v1.718h1.703v1.718h-1.703v1.718h-1.718v-1.718h-1.718zm-3.687-3.581L10.97 9.14c-2.08-2.033-6.127-.552-6.127 2.855 0 4.621 6.559 4.937 7.128 1.2H8.579v-2.061h5.657C14.878 14.49 12.711 18 8.579 18v.001c-3.329 0-6.001-2.686-6.001-6.001.001-5.338 6.333-7.861 10.018-4.438z"/>
                    </svg>

                  </button>

                  <button>
                    <svg className='fill-current text-gray-300 w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.196 112.196">
                        <defs/>
                        <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9"/>
                        <path fill="#f1f2f2" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z"/>
                    </svg>
                 </button>
               </div>
            </div>
            
         </div>
     </footer>
    )
}
