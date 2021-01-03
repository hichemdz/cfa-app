import React from 'react'

import c1 from '../../../assets/img/them.png';
const ItemSpescialty = ({ match }) => {
    // useEffect(() => {
    //    ;
    // }, [])
    const style = {

        playVideo: {

            transform: 'translate(-50%,-50%)'
        }
        ,
        innerIntroText: {
            'max-width': '600px'
        },
        container_: {
            width: '902px'
        }
    }


    return (
        <>
            <main className='grid grid-cols-12 pb-20 pt-10 '>
                <div className='grid grid-cols-8 gap-1 col-start-2 col-span-10 '>
                    <div className='col-span-12 lg:col-span-5 py-5 flex flex-col items-center text-center  justify-center lg:items-start lg:text-left '>
                        <h3 className='mb-3 text-sm text-gray-400 font-bold sucond_color'>Developent - Back End</h3>
                        <h1 className='mb-5 text-2xl md:text-3xl text-gray-200 font-black uppercase ' > JavaScript Features Critical to Understand </h1>
                        <h5 className='mb-5 text-md font-semibold text-gray-200 '>  Important JavaScript Concept and Features Every Developer Should Know  </h5>
                        <p className='text-gray-200  font-bold leading-7 ' style={style.innerIntroText} >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, eum rerum quasi rem officiis sunt quisquam error id, at quas quibusdam modi dolores. Saepe ipsa nostrum explicabo cumque deserunt sit ullam! Excepturi sequi nulla labore.
                           </p>
                    </div>
                    <div className='relative    hidde col-span-12  px- lg:block   lg:mt-5 lg:col-start-6 lg:col-span-3 lg:shadow-lg ' >
                        <img className='w-full hidden lg:block h-full' src={c1} alt="" />

                        <button className='hidden lg:block bg-yellow-0  bg-gray-100  rounded-full play_video lg:absolute top-1/2 left-1/2 ' style={style.playVideo}>
                            <svg className='fill-current sucond_color w-12 h-12' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <g><rect fill="none" height="24" width="24" /></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z" /></g>

                            </svg>

                        </button>

                        <button className='flex m-auto items-center py-2 px-4  bg-gray-700  hover:bg-gray-600 rounded-full   lg:hidden uppercase'>
                            <svg className='fill-current sucond_color w-8 h-8' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <g><rect fill="none" height="24" width="24" /></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z" /></g>

                            </svg>
                            <span className='ml-2 text-white text-sm font-bold'>Watch Intro</span>
                        </button>

                    </div>
                </div>
            </main>
            <div className="content mt-20">
                <section className=' grid grid-cols-12 mb-10'>
                    {/* lg:col-start-2 lg:col-span-10 */}
                    <div className='grid  md:grid-cols-3 border py-10 border-gray-200 leading-6 shadow-lg col-start-1 col-span-12  lg:col-start-2 lg:col-span-10   bg-gray-50 px-10 ' >

                        <div className='col-span-2' >

                            <h1 className='font-black text-2xl mb-6'>What You learn</h1>
                            <ul className=' grid   md:grid-cols-2 gap-4 text-md font-semibold '>

                                {
                                    [1, 2, 3, 4, 5, 6].map((v, k) => {
                                        return <li className='flex text-sm md:text-md'>
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

                        <div className='hidden md:flex items-center justify-center col-span-1'>
                            <svg className='w-64 h-64' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="654.23657" height="682.11354" viewBox="0 0 654.23657 682.11354"><title>mathematics</title><path d="M892.88171,744.55677c0,25.68-138.79,46.5-310,46.5s-310-20.82-310-46.5c0-18.18,69.57-33.93,170.96-41.57,41.81-3.16,89.05-4.93,139.04-4.93,20.55,0,40.63.3,60.05.87C785.40173,703.12678,892.88171,721.95673,892.88171,744.55677Z" transform="translate(-272.88171 -108.94323)" fill="#3f3d56" /><ellipse cx="270" cy="630.61354" rx="119" ry="14.5" opacity="0.1" /><ellipse cx="269.5" cy="521.11354" rx="112.5" ry="120" fill="#3f3d56" /><rect x="235" y="592.11354" width="70" height="64" fill="#f25f37" /><polygon points="396.5 607.614 392.5 629.614 418.5 633.614 435.5 623.614 434.5 607.614 396.5 607.614" fill="#575a89" /><path d="M538.38171,303.55677s-2,23-7,24,11,41,11,41h24l19-5-9-22s-12-16-3-29S538.38171,303.55677,538.38171,303.55677Z" transform="translate(-272.88171 -108.94323)" fill="#a0616a" /><path d="M538.38171,303.55677s-2,23-7,24,11,41,11,41h24l19-5-9-22s-12-16-3-29S538.38171,303.55677,538.38171,303.55677Z" transform="translate(-272.88171 -108.94323)" opacity="0.1" /><path d="M488.38171,479.55677s-26,50-5,60,26,9,26,12-4,2-2,7-4,25,2,37,4,21,4,21,0,1,2,5,3,7,2,9-7,15-1,18,37,5,40,0-3-8,0-11,5-4,3-6-4-27-4-27,5-29,3-33-5-8-3-11,4-2,5-6,3-13,3-13l11-1,26,5s29,32,61,42c0,0,9,9,12,9s3,0,2,2-4,2-2,4,5-1,3,2-4,3-2,5-1,13-1,14-9,95-6,97,45,8,48,0-2-18-2-18,15-120,11-128-18-44-93-67c0,0-21-4-21-7s-2-22-6-23-27-2-27-2l-29,9-40-7Z" transform="translate(-272.88171 -108.94323)" fill="#2f2e41" /><path d="M523.38171,647.55677l-5,18s-4,29,1,36c3.92739,5.49834,10.93965,12.23063,23.94449,13.4122a16.07115,16.07115,0,0,0,16.77855-11.11774,5.00653,5.00653,0,0,0,.277-1.29446c0-2-3-26-3-26l-5-25-1-7Z" transform="translate(-272.88171 -108.94323)" fill="#2f2e41" /><path d="M669.38171,733.55677s-5-5-6,0-5,26,2,27,74,11,81,7,20-10,12-13-31-12-31-12-13-17-15-18-13,1-18,5S669.38171,733.55677,669.38171,733.55677Z" transform="translate(-272.88171 -108.94323)" fill="#2f2e41" /><circle cx="289.5" cy="184.61354" r="31" fill="#a0616a" /><path d="M559.38171,363.55677l-12-13-13.30147-26s-9.69853-3-11.69853,2-38,21-38,21,9,84,5,92-11,40-5,43,34,0,43,4,35,4,42-1,9-9,16-6c5.95926,2.554,19.89075-84.761,23.90164-110.781a11.844,11.844,0,0,0-4.90807-11.50971c-8.97276-6.29384-25.13277-17.13965-27.99357-15.70925C572.38171,343.55677,559.38171,363.55677,559.38171,363.55677Z" transform="translate(-272.88171 -108.94323)" fill="#575a89" /><path d="M602.38171,359.55677h0a11.85952,11.85952,0,0,1,8.91063,10.19577l8.08936,72.80423s-20,43-30,14S602.38171,359.55677,602.38171,359.55677Z" transform="translate(-272.88171 -108.94323)" fill="#575a89" /><path d="M600.38171,449.55677l22-6s4,28,8,28-14,16-23,14-22-9-23-14,9-26,9-26Z" transform="translate(-272.88171 -108.94323)" fill="#575a89" /><path d="M538.98,306.92974c2.10792-4.648,1.74193-10.06966,3.48463-14.86653a17.72716,17.72716,0,0,1,26.95315-8.38071c2.24178,1.59841,4.48928,3.84417,7.22559,3.539,2.94671-.32859,5.575-3.61593,8.2842-2.41116,3.00277,1.33533,2.19174,6.71676,5.23391,7.95972,1.6013.65426,3.49355-.35311,4.41715-1.8157a11.2246,11.2246,0,0,0,1.28583-4.97622c.41976-4.26508.79909-8.779-1.05062-12.64493a30.28893,30.28893,0,0,1-2.02829-4.08992,13.99385,13.99385,0,0,1-.38561-4.03439c-.01689-5.01309-.38281-10.24215-2.90568-14.57417-2.79955-4.80711-7.97447-7.881-13.37326-9.22227s-11.055-1.13561-16.59807-.66635c-9.16324.77574-18.71927,2.43858-25.93856,8.135a10.14728,10.14728,0,0,0-2.49336,2.61953,13.525,13.525,0,0,0-1.32811,3.84148,79.44958,79.44958,0,0,1-6.96764,18.27716,39.65627,39.65627,0,0,0-3.59543,7.76544c-.76559,2.75442-.71387,5.89343.8887,8.26085,1.30475,1.92745,3.39065,2.95463,5.02945,4.53044,1.62387,1.56146,2.38368,4.56438,4.18252,5.74673,1.57033,1.03215,3.4513.30356,5.0529,1.39752C536.40966,302.72479,536.55818,305.80443,538.98,306.92974Z" transform="translate(-272.88171 -108.94323)" fill="#2f2e41" /><path d="M564.38171,378.55677l3-6s44,13,53,25c0,0,22-14,34-12l12,2-37,33-47-4Z" transform="translate(-272.88171 -108.94323)" fill="#f2f2f2" /><path d="M562.38171,372.55677l-41,57,59,29s5.51572,3,9.75786,0l39.24214-18,37-53-37,19s-4-8-12-4Z" transform="translate(-272.88171 -108.94323)" fill="#f25f37" /><path d="M625.38171,473.55677l8-21s18-23,8-34-21,32-21,32Z" transform="translate(-272.88171 -108.94323)" fill="#a0616a" /><path d="M533.07939,470.20556l17.45624-14.152s27.11-10.865,23.97851-25.39746-34.22053,17.14513-34.22053,17.14513Z" transform="translate(-272.88171 -108.94323)" fill="#a0616a" /><path d="M489.88171,369.05677h-1s-15.5-18.5-18.5,6.5-13,108,13,111,44.5-12.5,44.5-12.5,19-29,12-29c-3.38691,0-12.59835-1.52116-21-1-8.96272.556-17.01615,3.08078-16.5.5C503.38171,439.55677,517.88171,376.05677,489.88171,369.05677Z" transform="translate(-272.88171 -108.94323)" opacity="0.1" /><path d="M488.38171,349.55677l-4-2s-16,3-19,28-13,108,13,111,61-4,61-4,7-38,0-38-43,5-42,0S516.38171,356.55677,488.38171,349.55677Z" transform="translate(-272.88171 -108.94323)" fill="#575a89" /><polygon points="338 353.114 349.027 336.213 356 364.114 338 372.114 338 353.114" fill="#575a89" /><circle cx="111.47314" cy="85.11354" r="27" fill="#f2f2f2" /><rect x="79.47314" y="286.11354" width="64" height="64" fill="#f2f2f2" /><polygon points="372 0 388.199 28.057 404.397 56.114 372 56.114 339.603 56.114 355.801 28.057 372 0" fill="#f2f2f2" /><path d="M927.11829,277.17226q-.58078,17.95539-8.74513,28.78352-8.16571,10.82931-19.40145,10.83029-9.15176,0-16.04242-10.59861-6.89283-10.5984-6.892-32.60592,0-4.8648.23169-9.26642.23089-4.40064.57921-8.33968l4.05409-38.108H854.14538Q847.196,290.14515,842.73627,303.871q-4.46013,13.72556-15.11568,13.726a12.78019,12.78019,0,0,1-8.57155-3.59073,12.06434,12.06434,0,0,1-4.0541-9.4983q0-5.326,8.3976-14.884,8.39721-9.55611,9.32434-17.43233l6.94976-54.32423H828.43149a19.9108,19.9108,0,0,0-9.09265,2.25854,17.15586,17.15586,0,0,0-6.54451,5.27024l-4.98084,7.41313H803.7594q5.67412-17.6052,13.95764-26.46706,8.28-8.86106,19.05393-8.861H925.2652v20.38611H895.381q-1.39011,13.89963-2.14289,27.799-.75455,13.89963-.75278,27.9151,0,9.499,4.40162,15.40548,4.40064,5.90738,11.00386,5.90718,4.05312,0,8.51344-3.30132a11.97,11.97,0,0,0,5.03856-8.62908q.34754-2.54667.52109-3.99618.17377-1.44695.174-1.79536Z" transform="translate(-272.88171 -108.94323)" fill="#f25f37" /><path d="M927.11829,277.17226q-.58078,17.95539-8.74513,28.78352-8.16571,10.82931-19.40145,10.83029-9.15176,0-16.04242-10.59861-6.89283-10.5984-6.892-32.60592,0-4.8648.23169-9.26642.23089-4.40064.57921-8.33968l4.05409-38.108H854.14538Q847.196,290.14515,842.73627,303.871q-4.46013,13.72556-15.11568,13.726a12.78019,12.78019,0,0,1-8.57155-3.59073,12.06434,12.06434,0,0,1-4.0541-9.4983q0-5.326,8.3976-14.884,8.39721-9.55611,9.32434-17.43233l6.94976-54.32423H828.43149a19.9108,19.9108,0,0,0-9.09265,2.25854,17.15586,17.15586,0,0,0-6.54451,5.27024l-4.98084,7.41313H803.7594q5.67412-17.6052,13.95764-26.46706,8.28-8.86106,19.05393-8.861H925.2652v20.38611H895.381q-1.39011,13.89963-2.14289,27.799-.75455,13.89963-.75278,27.9151,0,9.499,4.40162,15.40548,4.40064,5.90738,11.00386,5.90718,4.05312,0,8.51344-3.30132a11.97,11.97,0,0,0,5.03856-8.62908q.34754-2.54667.52109-3.99618.17377-1.44695.174-1.79536Z" transform="translate(-272.88171 -108.94323)" opacity="0.1" /><path d="M927.11829,273.55326q-.58078,17.95539-8.74513,28.78352-8.16571,10.82931-19.40145,10.83029-9.15176,0-16.04242-10.5986-6.89283-10.59841-6.892-32.60593,0-4.8648.23169-9.26642.23089-4.40064.57921-8.33967l4.05409-38.10806H854.14538Q847.196,286.52615,842.73627,300.252q-4.46013,13.72557-15.11568,13.726a12.78019,12.78019,0,0,1-8.57155-3.59073,12.06432,12.06432,0,0,1-4.0541-9.49829q0-5.326,8.3976-14.884,8.39721-9.55612,9.32434-17.43233l6.94976-54.32424H828.43149a19.9108,19.9108,0,0,0-9.09265,2.25854,17.15586,17.15586,0,0,0-6.54451,5.27024l-4.98084,7.41314H803.7594q5.67412-17.60522,13.95764-26.46706,8.28-8.86107,19.05393-8.861H925.2652v20.38611H895.381q-1.39011,13.89963-2.14289,27.79906-.75455,13.89962-.75278,27.91509,0,9.499,4.40162,15.40548,4.40064,5.90738,11.00386,5.90718,4.05312,0,8.51344-3.30132a11.97,11.97,0,0,0,5.03856-8.62908q.34754-2.54667.52109-3.99617.17377-1.447.174-1.79537Z" transform="translate(-272.88171 -108.94323)" fill="#f25f37" /></svg>
                        </div>
                    </div>
                </section>

                <section className='grid grid-cols-12 mb-10'>
                    <div className='border-gray-200 leading-6  col-start-1 col-span-12  lg:col-start-2 lg:col-span-10  px-10' >

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
                    <div className='border-gray-200 leading-6  col-start-1 col-span-12  lg:col-start-2 lg:col-span-10 px-10' >

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

                <section className='grid grid-cols-12 mb-10'>
                    <div className='border-gray-200 leading-6  col-start-1 col-span-12  lg:col-start-2 lg:col-span-10 px-10' >

                        <h1 className='font-black text-2xl mb-6'>Reviews</h1>

                        <div className='bg-white   rounded-lg flex items-center shadow-lg'>
                            <input className='w-full p-3 g-red-200' placeholder='What you think ' type="text" name="" id="" />

                            <button className='py-3 px-5 h-full sucond_bg_color'>
                                <svg className='fill-current text-gray-200 w-6 h-6' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M18.75 3.94L4.07 10.08c-.83.35-.81 1.53.02 1.85L9.43 14c.26.1.47.31.57.57l2.06 5.33c.32.84 1.51.86 1.86.03l6.15-14.67c.33-.83-.5-1.66-1.32-1.32z" />
                                </svg>
                            </button>
                        </div>

                        <div className='inner_coment bg-gray-50 mt-5 '>
                            {[1, 1, 1, 1, 1,].map((v, k) => {


                                return (
                                    <div className='flex items-start  border-b border-gray-300  pt-6 pb-4 px-5 ' >
                                        <div className='mr-4 hidden  sm:block'>
                                            <div className='w-12 h-12 flex items-center justify-center text-xl font-black rounded-full sucond_bg_color'>
                                                BL
                                   </div>
                                        </div>
                                        <div>
                                            <h4 className=' font-bold mb-1'>Boudjahfa lakhdar</h4>
                                            <p className='text-gray-500 '>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea repellendus repudiandae animi quidem voluptatum veritatis temporibus? Quod at nihil eius animi suscipit odio. Aperiam quia esse quo sit. Aperiam quibusdam nisi quisquam illum sunt.
                                     </p>
                                        </div>
                                    </div>
                                )




                            })}


                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default ItemSpescialty;