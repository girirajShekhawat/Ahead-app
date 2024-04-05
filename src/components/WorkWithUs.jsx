import React from 'react';
import { WorkWithUsElementData } from '../assets/data';
import { motion, spring } from 'framer-motion';

function WorkWithUs(props) {
    return (
        <div className=' py-[10px] bg-[#f3f1ff] my-[50px] px-[30px] rounded-[23px]'>
   
           <div className='flex justify-between mb-[40px] mt-[70px]'>

           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ always:true }}
            transition={{ duration: 2,  type: "spring",bounce:0.3 ,}}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "-50%" },
            }}>
           <h1 className='font-[700] text-[43px] leading-[29px] font-sans mt-[12px]'>Work with us</h1>
           </motion.div>
            
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{always:true}}
            transition={{duration:2, type:"spring",bounce:0.3}}
            variants={{
                visible:{opacity:1, scale:1, x:0 , Y:0},
                hidden:{opacity:0, scale:0.5, x:"50%"}
            }}>
           <h1 className="text-[#5733f2]  font-[700] text-[45px] leading-[29px] font-sans mt-[12px] mr-12">ahead</h1>
           </motion.div>
           </div>

           <div className='flex justify-between gap-10'>
        <div className='flex flex-col'>
           
            <div className="rounded-2xl bg-white  pt-5 w-[370px]  shadow-lg"> 
            <div  className="flex flex-col gap-3 px-4" >

                <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ duration: 3, }}
                 variants={{
                    visible: { 
                        opacity: [0.8,0.9,1], scale: [0.6,0.55,1],    rotate: [-10, 10, -10,0]  // Swinging left and right
                    },
                    hidden: { rotate: 0 },
                  }}
                       

                 >
                <img src='src\assets\newGhost.png' alt='teddy Img' className='h-[70px] w-[60px] -ml-1  '/>
                </motion.div>
                 
                <h1 className="font-bold text-lg mt-1">About</h1>
                <p className="font-normal text-base">At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what ahead is all about!</p>
            </div>
                <div className="flex flex-col gap-2 py-5  px-4 rounded-2xl  mt-5 bg-orange-50"> 
                <h1 className="font-bold text-lg">Product</h1> 
                <p className="font-normal text-base">Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
                </div>
                </div>
            </div>
             

       
        <div className='flex flex-col  gap-5  h-[530px] overflow-y-scroll   custom-scrollbar'>
             

            {WorkWithUsElementData.map((data)=>(
                
                <div  className="p-4 bg-white rounded-2xl space-y-6  w-[300px]  mr-10  ">
                <h1 className=' font-bold'>{data.title}</h1>
                <p className='text-sm'>{data.content}</p>
            </div>
            ))}
             
        </div>
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