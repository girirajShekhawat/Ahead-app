import React from 'react';
 import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function SideMovingBox(props) {

     const [isIntersecting, setIsIntersecting] = useState(false);
     const ref = useRef(null);
    const boxContainerRef = useRef(null);
      
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
            console.log(entry)
         return setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px" }
      );
      
      if(ref.current){
        observer.observe(ref?.current);
      }
       
      return () => observer.disconnect();
    }, []);
  
    useEffect(() => {
        console.log("hii")
      if (isIntersecting) {
        console.log("hii")
        boxContainerRef.current.scrollBy({
          top: 0,
          left: +500,
          behavior: "smooth",
        });
      }
    }, [isIntersecting]);


   

    return (
        <div className=' relative  h-[300px]  '  >

<motion.div
        
          initial="hidden"
          whileInView="visible"
          viewport={{ always: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.4" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
            <h1 className=' font-[700] text-[30px] leading-[29px] font-sans ml-[30px] mb-[40px]  '>Does this sound familiar...</h1>
            </motion.div>

            <motion.div
          viewport={{ always: true }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [100, -100, -200, -250, -330],
              y: [-10, -20, -30, -40, -50],
              rotate: [0, 0,10,-5   ],
               
            },
            hidden: { opacity: 0, scale: 0},
          }}
          transition={{ duration: 2.1, ease: "easeInOut", type: "spring",delay:0.3 }}
        >
            <img src='src\assets\TeddyImage.svg' alt='teddyImg' className='h-[80px] w-[70px]  absolute -top-[30px] right-[170px] -rotate-[19deg]'/>
         </motion.div>

<div className='flex justify-between items-center h-[220px]   overflow-x-auto w-[1000px] no-scrollbar  '  ref={boxContainerRef} >
    <div className='bg-[#eeebfe] mx-[10px] rounded-xl pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px] hover:scale-105 hover:-rotate-[6deg] hover:duration-300 ease-in-out  '>
        <h3 className='text-lg font-bold'>😠</h3>
        <h3 className='text-base font-bold'>You argue with a colleague</h3>
        <p className='text-sm text-balance'>You get angry and defensive, instead of staying open and working towards common ground.</p>
    </div>
    <div className='bg-[#ffefd5] mx-[10px] rounded-xl  pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px] hover:scale-105 hover:-rotate-[6deg] hover:duration-300 ease-in-out  '  >
        <h3 className='text-lg font-bold'>😮</h3>
        <h3 className='text-base font-bold'>You get a promotion at work</h3>
        <p className='text-sm'>You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</p>
    </div>
    <div className='bg-[#6341ef] mx-[10px] rounded-xl   pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px] hover:scale-105 hover:-rotate-[6deg] hover:duration-300 ease-in-out  '>
        <h3 className='text-lg font-bold'>🫤</h3>
        <h3 className='text-base font-bold'>You attend a class regularly</h3>
        <p className='text-sm'>You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</p>
    </div>
    <div className='bg-[#d8f2ff] mx-[10px] rounded-xl   pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px] hover:scale-105 hover:-rotate-[6deg] hover:duration-300 ease-in-out  '>
        <h3 className='text-lg font-bold'>😦</h3>
        <h3 className='text-base font-bold'>You argue with a colleague</h3>
        <p className='text-sm'>You get angry and defensive, instead of staying open and working towards common ground.</p>
    </div>
    <div className='bg-[#f47171] mx-[10px] rounded-xl  pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px] hover:scale-105 hover:-rotate-[6deg] hover:duration-300 ease-in-out  '>
        <h3 className='text-lg font-bold'>🥱</h3>
        <h3 className='text-base font-bold'>You argue with a colleague</h3>
        <p className='text-sm'>You get angry and defensive, instead of staying open and working towards common ground.</p>
    </div>
</div>

            
        </div>
    );
}

export default SideMovingBox;





