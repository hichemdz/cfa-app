import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {

    const Navigation = ['specialties', 'about', 'contact', 'blog']
    const [active, setInnerNav] = useState(false)
    const [activeLink, setActiveNav] = useState('home')
    const toggle = () => setInnerNav(!active)
    const toggleNavItem = (nav) => setActiveNav(nav);
    console.log(activeLink);



    const Icon = () => {
        if (!active) return <> <path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /> </>
        return <> <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" /></>
    }
    return (
        <header>
            <nav className="relative border-b border-gray-800 col-span-12   grid grid-cols-12 py-3 ">
                <div className="col-start-2 col-span-10 flex items-center text-gray-200   justify-between">

                    <Link className='font-black text-4xl w-full' to='/'><span className='p-3' onClick={() => toggleNavItem('home')} > CFA </span></Link>
                    <div className={'inner_nav flex items-center justify-center  bg-gray-800 z-50 w-full h-screen  fixed top-0 pt-10 left-0 md:pt-0  md:inline-block md:w-auto md:h-auto md:static  md:bg-transparent ' + (active ? 'block' : 'hidden')}>
                        <ul className='flex  flex-col items-center text-2xl font-normal md:text-sm  md:flex-row'>
                            {
                                Navigation.map((v, k) => {
                                    return (
                                        <Link className={'mr-3 mb-3 md:mb-0 text-white  uppercase ' + (activeLink === v ? 'sucond_color font-bold' : '')} onClick={() => toggleNavItem(v)} to={'/' + v}>
                                            <span className='' > {v} </span>
                                        </Link>
                                    )
                                })
                            }
                            {/* <Link className='mr-3 mb-3 md:mb-0 text-white hover:text-yellow-500' to='/about'><span className='p-3' > About </span></Link>
                            <Link className='mr-3 mb-3 md:mb-0 text-white hover:text-yellow-500' to='/contact'><span className='p-3' > Contact </span></Link>
                            <Link className='mb-3 md:mb-0 text-white' to='/blog'><span className='p-3' > Blog </span></Link> */}
                        </ul>

                        <button className='menu rounded   absolute top-5 right-5 md:hidden' onClick={toggle} >
                            <svg className='fill-current text-gray-200 md:hidden w-6 h-6' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">

                                <Icon />

                            </svg>
                        </button>
                    </div>
                    {/* <ul className="flex text-s ">
                            <Link className='mr-1'><span className='rounded p-3 ' href="">SginIn</span></Link>
                            <Link className=''><span className='rounded p-3 ' href="">LogIn</span></Link>
                        </ul> */}
                    <button className='menu rounded   absolute top-5 right-5 ' onClick={toggle} >
                        <svg className='fill-current text-gray-200 md:hidden w-6 h-6' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">

                            <Icon />

                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Nav
