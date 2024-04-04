import React from 'react';
import { selfImprovementElementData } from '../assets/data';

function SelfImprovement(props) {
    return (
        <div className='flex flex-col py-[50px]'>
        <div>
            <p className='text-sm font-bold  '>Wrong with self-improvement & how we're fixing it.</p>
            <h1 className='font-[700] text-[30px] leading-[29px] font-sans mt-[12px]'>Self-improvement.Ugh.</h1>
        </div>
        <div className='flex justify-end  timeline px-20 pt-14 h-96 overflow-y-scroll'>
            <ul className='flex flex-col border-l-2 border-l-violet-300    gap-16 relative'>
            {/* <div style={{left:"-12px"}} className="absolute">🟣</div> */}

            {
                selfImprovementElementData.map((data)=>(
                    <li>
                    <h3 className='text-sm font-bold  '>{data.title}</h3>
                    <p>{data.content}</p>
                   </li>
                ))
            }
            </ul>
        </div>
        </div>
    );
}

export default SelfImprovement;