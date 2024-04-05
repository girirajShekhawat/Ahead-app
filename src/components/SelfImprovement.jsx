import React from 'react';
import { selfImprovementElementData } from '../assets/data';

function SelfImprovement(props) {
    return (
        <div className=' flex flex-col py-[50px] my-[50px]'>
        <div className='ml-5 sm:ml-12 relative'>
            <p className='text-sm font-[500]  '>Wrong with self-improvement & how we're fixing it.</p>
            <h1 className='font-[700] text-[35px] leading-[49px]   mt-[12px]'>Self-improvement. Ugh.</h1>
            <img src='src\assets\blue-ghost.webp' alt='teddyImg' className='h-[70px] w-[70px]  absolute  top-5 left-[420px] rotate-1 '/>
        </div>
        <div className=' '>
        <div className='flex sm:justify-center ml-5 sm:ml-[0px]    sm:pl-[50px] mt-14 h-96 overflow--y-scroll  no-scrollbar  '>
            <ul className='flex flex-col border-l-2 border-l-violet-300  h-96 overflow-y-scroll   no-scrollbar   gap-10   '>
            

            {
                selfImprovementElementData.map((data)=>(
                   
                    
                    <li className='ml-6 relative '>
                    <div   className="absolute -left-[35px]  ">🟣</div>
                    <h3 className='text-base font-bold mb-2 max-w-[500px]'>{data.title}</h3>
                    <p className='text-sm font-[500] max-w-[600px] '>{data.content}</p>
                   </li>
                 
                ))
            }
            </ul>
        </div>
        </div>
        </div>
    );
}

export default SelfImprovement;