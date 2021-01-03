import React from 'react'

export default function pagination(props) {
    return (
        <div className='flex items-center'>
            <button className='h-8 px-2 flex justify-center items-center bg-gray-300 shadow-lg mr-1' >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </button>
            <ul className='flex'>

                {
                    props.data.map((v, k) => {
                        return <li className=' px-3 h-8 flex justify-center items-center bg-gray-300 shadow-sm border  mr-1'>{k + 1}</li>
                    })
                }


            </ul>
            <button className='h-8 px-2 flex justify-center items-center bg-gray-400 shadow-lg mr-1' >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </button>
        </div>


    )
}
