import React from 'react';
import { WorkWithUsElementData } from '../assets/data';

function WorkWithUs(props) {
    return (
        <div className='flex py-[50px] bg-[#f3f1ff] my-[50px]'>
        <div className='flex flex-col'>
            <h1 className='font-[700] text-[30px] leading-[29px] font-sans mt-[12px]'>Work with us</h1>
            <div className="rounded-2xl bg-white  pt-8 max-w-[30rem] shadow-lg"> 
            <div  className="flex flex-col gap-3 p-4" >
                <img src='src\assets\TeddyImg2.svg' alt='teddy Img' className='h-[60px] w-[60px]'/>
                <h1 className="font-bold text-lg">About</h1>
                <p className="font-normal">At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what ahead is all about!</p>
            </div>
                <div className="flex flex-col gap-2 pt-8  p-4 rounded-2xl  mt-8 bg-orange-50"> 
                <h1 className="font-bold text-lg">Product</h1> 
                <p className="font-normal">Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
                </div>
                </div>
            </div>
             

       
        <div className='flex flex-col  gap-5 max-h-[75vh] overflow-y-auto pr-6 custom-scrollbar'>
            <h1 className="text-[#5733f2]  font-[700] text-[30px] leading-[29px] font-sans mt-[12px]">ahead</h1>

            {WorkWithUsElementData.map((data)=>(
                
                <div  className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]">
                <h1 className=' font-bold'>{data.title}</h1>
                <p className='text-sm'>{data.content}</p>
            </div>
            ))}
             
        </div>
       </div>
    );
}

export default WorkWithUs;







{/* <div  className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]">
                <h1 className=' font-bold'>Power through, even when the going gets tough</h1>
                <p className='text-sm'>We help you spot and work around whatever stands in the way, ve it vad habits, fear, etc.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]">
                <h1 className=' font-bold' >
                    Learn more about who you are and where you want to go.
                </h1>
                <p className='text-sm'>We ask the right questions to help you better understand why you do things the way you do.</p>
            </div >
            <div className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]">
                <h1 className=' font-bold'>
                    Plan and grow together with others on the same journey
                </h1>
                <p className='text-sm'>
                    Ahead feels like a games, not like a chore. See yourself grow everyday towards achieving your goals!
                </p>
            </div>
            <div className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]">
                <h1 className=' font-bold'>Power through, even when the going gets tough</h1>
                <p className='text-sm'>We help you spot and work around whatever stands in the way, ve it vad habits, fear, etc.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]">
                <h1 className=' font-bold'>
                    Learn more about who you are and where you want to go.
                </h1>
                <p className='text-sm'>We ask the right questions to help you better understand why you do things the way you do.</p>
            </div >
            <div className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]">
                <h1 className=' font-bold'>
                    Plan and grow together with others on the same journey
                </h1>
                <p className='text-sm'>
                    Ahead feels like a games, not like a chore. See yourself grow everyday towards achieving your goals!
                </p>
            </div> */}