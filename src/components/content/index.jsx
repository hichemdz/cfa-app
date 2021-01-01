import React, { useState,useEffect } from 'react';
import c1 from '../../assets/img/c1.png' ;
// import p1 from '../../assets/img/profile.png' ;
// import c2 from '../../assets/img/c2.jpeg';
import './app.css';
const Content =   () => {  
const [count, setCount] = useState(0);
const cous = [
    {
        'img':c1,
        'title':' Spcialty  Web Developmet '
    }  
    ,
    {
        'img':c1,
        'title':' Spcialty  Moblile Developmet '
    }  
    ,
    {
        'img':c1,
        'title':' Spcialty  Desktop Developmet '
    } ,
    {
        'img':c1,
        'title':' Spcialty  Infgraph Developmet '
    } , 
    
    {
        'img':c1,
        'title':' Spcialty  Moblile Developmet '
    }  
    ,
    {
        'img':c1,
        'title':' Spcialty  Desktop Developmet '
    } 
    ,
    {
        'img':c1,
        'title':' Spcialty  Desktop Developmet '
    } ,
    {
        'img':c1,
        'title':' Spcialty  Infgraph Developmet '
    } , 

]
const Specoalty =  (props) =>
                     <div className='items-specoalty relative shadow-lg hover:shadow-xl hover:bg-yellow-100 bg-white order-1 border-gray-200 ' >
                
                          <div className='border-t-4 sucond_border_color'>
                              <img className='w-full h-full' src={props.img} alt=""/>
                              <h3 className='text-xl px-2 font-black my-3 text-center' > {props.title} </h3>
                              <button className='w-1/2 mx-auto block rounded-t-full mt-3 sucond_color shadow-3 text-sm font-bold  py-2 px-5'>View More </button>
                          </div>

                     </div>

const Features =  (props) =>
                <div className='relative  p-3 pb-6 leading-8 justify-around border-t-4 sucond_border_color shadow-lg bg-white border-1 flex' >

                    <div className='mt-1 mr-3 shadow-xl border-1 bg-gray-20 rounded-full bggray-200 w-12 h-10 flex justify-center items-center'>
                        <svg className=' fill-current w-6 h-6 text-gray-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <defs/>
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path fill-rule="evenodd" d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"/>
                            <circle cx="9" cy="8" r="4" fill-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>   
                    <div className="w-full">
                        <h5 className='text-gray-400 font-bold mb-2'>  dolor, sit amet consectetur </h5>
                        <h3 className='text-2xl font-black mb-2'> Training Solutions </h3>
                        <p className='text-md'>O&B's formula for managing, assessing, and training software development staff can be replicated for your organization.  </p>
                    </div>                

                </div>                 

//setCount(count >= cous.length?count =0:count+=1)
useEffect(() => {
    const interval_id = setInterval(()=>setCount(count >= cous.length-1?0:count+1), 3000);
     return () => {
        // Stop the interval when the component unmounts. 
        // Otherwise it will keeep going and you will get an error.
        clearInterval(interval_id)
      }
})


const Testimonials = (props) => {
   
  
   return (
         <div className={'p-5 items_testimonials justifay-around   flex items-center    ext-gray-500 ' + (props.id === count ? 'block':'hidden')}>
             <div className='md:p-5 lg:w-1/2 m-auto text-center'>
                <svg className='fill-current m-auto w-16 h-16' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z"/></svg> 
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

    return (
        <div className="content">
            <section id='distance' className='mb-20 mt-28 grid grid-cols-12'>
                <div className="col-start-2 col-span-10">
                    <h3 className='text-4xl font-bold mb-5 '>Professors specialized with extensive experience</h3>
                    <p className='leading-7 text-md '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, impedit repellat! Laboriosam fugiat ab excepturi consectetur consequuntur, corporis adipisci exercitationem, sint culpa facere in! Consequatur alias magni obcaecati pariatur nam?</p>
                    <button className='rounded-full mt-5 sucond_color shadow-3 text-sm font-bold  py-3 px-5'> View more Detialse</button>
                </div>
            </section>

            <section id='spcialty' className='mb-20 grid grid-cols-12 '>
                <div className="col-start-2 col-span-10 text-center">
                <h3 className='text-4xl font-bold mb-8 text-left '>Specializations of our institute</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-10 gap-y-12">
                        {
                            cous.map( (v,k)=> <Specoalty  img={v.img}  title={v.title} key={k} />)
                        }

                 
                    </div>
                    {/* show more */}
                    <button className='rounded-full   mt-20 bg-transparent sucond_color shadow-3 text-sm font-bold  py-3 px-5'>    
                       <svg  className='fill-current sucond_color' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                         <path d="M12 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2zm-6 0c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm10-9v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2z"/>
                       </svg>
                    </button>
                </div>
            </section>
           
            <section id='features' className='mb-32 mt grid grid-cols-12'>
                <div className="col-start-2  col-span-10">
                   <h3 className='text-4xl font-bold mb-8 '>Specializations of our institute</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                        {
                            [1,2,3].map( (v,k)=> <Features   key={k} />)
                        }

                    </div>

                    
                    
                    
                </div>
            </section>
            
            <section id='posts' className='mb-20 grid grid-cols-12'>

                <div className=" col-start-2  gap-10 col-span-10">
                   <div className='text-center' >
                     
                     {
                         [1,2,3,6].map((v,k)=>{
                             return  <div className={'flex mb-10 ' + ((k+1)%2 === 0?'flex-row-reverse':'') }>
                                <div className='lg:-32   w-full'>
                                    <h3 className='text-4xl title_posts relative font-bold mb-8 '>Specializations of our institute </h3>
                                    <p className='leading-8'>
                                    If you want to create mission-critical systems, take your products to market quickly, and maintain a clean code base -then you need great developers.
                                    Adopt what we've learned from decades of providing software engineering solutions. 
                                    </p>
                                    <button className='rounded-full mt-5 sucond_color shadow-3 text-sm font-bold  py-3 px-5'> View more Detialse</button>
                                </div>

                                <div className='hidden lg:flex w-full   justify-center '>
                                    <img className='img_about border-4 brder-yellow-500 rounded-full' src={c1} alt=""/>
                                </div>
                            </div> 
                         })
                     }
                   
                   </div>
                    {/* show more */}
                        <button className='rounded-full  block mx-auto   mt-24 bg-transparent sucond_color shadow-3 text-sm font-bold  py-3 px-5'>    
                            <svg  className='fill-current sucond_color' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M12 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2zm-6 0c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm10-9v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2z"/>
                            </svg>
                        </button>
                   </div>    
            </section>
          
            <section id="testimonials" className='mb-20 grid  grid-cols-12'>
                <div className="col-start-2 grid grid-rows-1 gap-10 col-span-10 ">
                   
                   <div className="inner_testimonials ">

                        {
                            cous.map((vl,id)=> <Testimonials key={id} id={id} /> )
                        }
                   </div>

                    
                    
                </div>
            </section>
            
        </div>
    )
}

export default Content;