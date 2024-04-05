import React from 'react';
import { easeInOut, motion } from 'framer-motion';
function MeetAheadApp(props) {
    return (
        <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{always:true}}
         variants={{
            hidden:{opacity:0.7, x:0, y:0, scaleY:0.9,} , 
            visible:{opacity:1, x:0, y:0, scaleY:1 }
         }}
         transition={ { type: "spring",
         bounce:0.4,
         duration: "1.5",
         ease: "easeInOut",
         }}
        className='relative my-[100px]'> 
        <div className='bg-[#fef7f1] flex py-[50px] h-[450px] rounded-[23px]  overflow-hidden'>
            <div className='flex flex-col w-full  relative '>
            <span className='justify-start ml-[35px] mt-[50px]'>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{always:true}}
                transition={{duration:1.7,type:"spring",bounce:0.4}}
                variants={{
                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, scale: 0.5, x: "-20%" },
                  }}
                >
            <p className='text-sm font-bold  '>Built out of frustration</p>
            <h1 className='font-[700] text-[30px] leading-[29px] font-sans mt-[12px]'>Meet the ahead app</h1>
            </motion.div>
            </span>
       

         {/* circle element */}
            <motion.div
  whileInView="visible"
  viewport={{ always: true }}
  initial="hidden"
  variants={{
    hidden: { opacity: 1, x:0, y: 200 },
    visible: {
      opacity: 1,x: [400, 0],  y: [50, 4],  
       },
  }}
  transition={{
    type: "tween",
    duration: 1,
    ease: "easeInOut",
     
  }}
  className='absolute h-[200px] w-[200px] -left-[60px]  -bottom-[20px] bg-[#fae8dc] rounded-full '
>
</motion.div>
            
             {/* shaded circle element */}

             <motion.div
          whileInView="visible"
          viewport={{ always: true }}
          initial="hidden"
          variants={{
            visible: {
              x: [190, 10],
              y: [19, -20],
              rotate: 25,
            },
            hidden: { y: 25 },
          }}
          
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay:0.3
          }}
          className='absolute h-[10px] w-[10px] rounded-full bg-[#e9695b] ring-8  ring-[#f7d2bf] top-[300px] left-[260px]'
        >
             
            </motion.div>

             {/* small circle element */}

             <motion.div
          whileInView="visible"
          viewport={{ always: true }}
          initial="hidden"
          variants={{
            visible: {
              x: [190, 10],
              y: [19, -20],
              rotate: 25,
            },
            hidden: { y: 25 },
          }}
          
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay:0.3
          }}
          className='absolute h-[25px] w-[25px] rounded-full  top-[200px] left-[310px] bg-[#f2c8c9]'
        >
       </motion.div>
            {/* leaf element */}

            <motion.div
          whileInView="visible"
          viewport={{ always: true }}
          initial="hidden"
          variants={{
            visible: {
              x: [190, 10],
              y: [19, -20],
              rotate: 360,
            },
            hidden: { y: 25 },
          }}
          
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay:0.3
          }}
          className="  w-[50px] h-[30px] bg-[#75c496] overflow-hidden customleaf absolute left-[260px] top-[240px] -rotate-[40deg]"
        >
       </motion.div>
             
            
            {/* sun element */}
            <motion.div
            whileInView="visible"
            viewport={{ always: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0,   },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              bounce:0.4,
              duration: "1.5",
              ease: "easeInOut",
              delay:0.3 ,
            }}
            className='h-[44px] w-[44px] absolute left-[150px] bottom-[150px] z-10'
          >
                <img src='src\assets\sun badge.webp' alt="sun image"/>

             </motion.div>
            <div className=' absolute left-[100px] bottom-[30px]  h-[150px] w-[150px] rounded-full border-[10px] border-solid border-[#f4f6f6] bg-white'>
                <img src='src\assets\TeddyImg2.svg' alt='teddyImg' className='  mix-blend-multiply'/>
            </div>
            </div>
            <div className='flex flex-col w-full justify-center items-start mt-[100px] mr-[50px]  '>


                 {/* flower element */}
                 <motion.div
        whileInView="visible"
        viewport={{ always: true }}
        initial="hidden"
        variants={{
              visible: { opacity: 1,rotate:360 },
              hidden: {  opacity: 1 },
        }}
  
        transition={{
          loop: Infinity, 
          ease:  easeInOut,
          duration: 1.9, 
        }}
        className="  h-[48px] w-[48px] absolute right-[56px] -top-[27px] "   
      > 
                 
                    <img src='src\assets\flowerImg.webp' alt='flowerImg' />
                 
         </motion.div>
                {/* leaf element */}

                <motion.div
        whileInView="visible"
        viewport={{ always: true }}
        initial="hidden"
        variants={{
              visible: { opacity: 1,rotate:360 },
              hidden: {  opacity: 1 },
        }}
  
        transition={{
          loop: Infinity, 
          ease:  easeInOut,
          duration: 1.9, 
        }}
        className="  w-[50px] h-[30px] bg-[#75c496] overflow-hidden customleaf absolute right-[100px] top-[50px] -rotate-[20deg]"   
      > 
             
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{always:true}}
                transition={{duration:1.7,type:"spring",bounce:0.3}}
                variants={{
                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                    hidden: { opacity: 0, scale: 0.5, x: "-20%" },
                  }}
                >
                <p className='text-[16px] font-[400] leading-[23px]   text-black'>
                    A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
                </p>
                <p className='text-[16px] font-[400] leading-[23px]   text-black mt-[10px]'>
                    Think of it as a pocket cheerleader towards a better, more fulfilling.
                </p>
                </motion.div>
            </div>
        </div>
        </motion.div>
    );
}

export default MeetAheadApp;



 
   