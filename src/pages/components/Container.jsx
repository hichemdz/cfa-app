import React from 'react'

function Container(props) {
    const cols = props.cols ? props.cols : 1;
    console.log();
    return (
        <div className='grid grid-cols-12'>
            <div className={`grid col-start-2 col-span-10 grid-cols-${cols}`} >
                {props.children}
            </div>
        </div>
    )
}

export default Container
