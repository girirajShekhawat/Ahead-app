 


import React from 'react';

function TextBox(props) {
    const {data}=props
    return (
        <div className='flex justify-between gap-10'>
            <h1 className='text-xl font-[700] leading-7 w-1/2 ml-5'>{data.title}</h1>
            <span className="flex justify-between gap-10 w-full"> 
            <p className='text-lg font-normal text-wrap'>{data.paragraphs[0]}</p>
            <p className='text-lg font-normal text-wrap'>{data.paragraphs[1]} </p>
            </span>
        </div>
    );
}

export default TextBox;


 