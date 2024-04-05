import React from 'react';
import { selfImprovementElementData } from '../assets/data';
import { motion } from 'framer-motion';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react"

function SelfImprovement(props) {
    const customAnimation = keyframes`
    from {
      opacity: 0.1;
      transform: translate2d(-50px, 0);
    
    }
  
    to {
      opacity: 1;
      transform: translate2d(0, 0);
    }
  `;

    return (
        <div className=' flex flex-col py-[50px] my-[100px]'>
        <div className='ml-5 sm:ml-12 relative'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ always: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
            <p className='text-sm font-[500]  '>Wrong with self-improvement & how we're fixing it.</p>
            <h1 className='font-[700] text-[35px] leading-[49px]   mt-[12px]'>Self-improvement. Ugh.</h1>
            </motion.div>

            <motion.div
          viewport={{ always: true }}
          transition={{ duration: 2.1, ease: "easeInOut", type: "spring",delay:0.1 }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35,-35,-35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0},
            
          }}
          className=' absolute   lg:top-[20px] lg:-right-[20px] rotate-1 '
        >
            <img src='src\assets\blue-ghost.webp' alt='teddyImg' className='h-[70px] w-[70px]      '/>
       </motion.div>
        </div>
        <div className=' '>
        <div className='flex sm:justify-center ml-5 sm:ml-[0px]    sm:pl-[50px] mt-14 h-96 overflow--y-scroll  no-scrollbar  '>
            <ul className='flex flex-col border-l-2 border-l-violet-300  h-96 overflow-y-scroll   no-scrollbar   gap-10   '>
            

               <Reveal keyframes={customAnimation}> 
                {selfImprovementElementData.map((data,index)=>(
                   
                    <motion.div
                    key={index}
                    className='relative  '> 
                    <li className='ml-6 relative '>
                   
                    <div   className="absolute -left-[35px] -top-[5px]  h-[8px] w-[8px] rounded-full  bg-violet-700 ring-8  ring-violet-400  "></div>
                    <h3 className='text-base font-bold mb-2 max-w-[500px]'>{data.title}</h3>
                    <p className='text-sm font-[500] max-w-[600px] '>{data.content}</p>
                   </li>
                   </motion.div>
                ))}
                </Reveal>
             
            </ul>
        </div>
        </div>
        </div>
    );
}

export default SelfImprovement;






//absolute  top-5 left-[420px] rotate-1