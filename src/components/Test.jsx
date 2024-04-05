import React from 'react';
import { motion } from 'framer-motion';

function Test(props) {
    const text = "Team ahead app";
    return (
        <div>
             <div className='flex flex-col items-center  py-[50px] my-[50px]'>

                <motion.div
                 initial="hidden"
                 
                 whileInView="visible"
                 viewport={{ always: true }}
                 variants={{
                   hidden: { opacity: 1, y: -20 },
                   visible: { opacity: 0.6, y: 0 }
                 }}
                 transition={{ duration:1, type: "spring", bounce: 0.4 }}
                >
                <p className='text-sm font-bold  '>We take privacy seriously</p>
                </motion.div>
            
                <motion.div
                 initial="hidden"
                 
                 whileInView="visible"
                 viewport={{ always: true }}
                 variants={{
                   hidden: { opacity: 1, y: -20 },
                   visible: { opacity: 1, y: 0 }
                 }}
                 transition={{ duration:0.8, type: "spring", bounce: 0.4 }}
                 >
            <h1 className='font-[700] text-[30px] leading-[29px] font-sans mt-[12px]'>Before you get started</h1>
            </motion.div>
            <motion.div
                 initial="hidden"
                 
                 whileInView="visible"
                 viewport={{ always: true }}
                 variants={{
                   hidden: { opacity: 1, y: -20 },
                   visible: { opacity: 1, y: 0 }
                 }}
                 transition={{ duration:1, type: "spring", bounce: 0.4 }}
                 > 
            <p className="text-xl font-normal mt-[12px] text-wrap mx-[90px] items-center leading-[29px] text-center ">"We won't share your answers with anyone(and  won't ever tell you  which friends said about you)"  </p>
            </motion.div>
            <p className='text-sm font-bold mt-[17px] '>with love, 
                {/* here we need the aniamtion*/}
                <span> {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{always:true}}
         variants={{
            hidden: { opacity: 0, y: -2 },
            visible: { opacity: 1, y: 0 }
         }}
          transition={{ duration: 0.8, delay: index * 0.05 }}
          style={{
            fontFamily: ' Brush Script MT, Brush Script Std, cursive',
            fontSize: '34px',
            fontWeight: 'normal',
            lineHeight: '1.5',
            letterSpacing: '1px',
            whiteSpace: 'pre-wrap',
            display: 'inline-block'
          }}
        >
          {char}
        </motion.span>
      ))}</span>
            </p>
           
             
            <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ always: true }}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: {
              opacity: 1,
              scale: [0,0.5,0.8,1.01,1],
              transition: { ease: "easeInOut", duration: 2, type:"spring" , bounce:0.3},
            },
          }}
        >        <div className='h-[40px] w-[127px]   bg-[#0d0c22] rounded-full   flex items-center pl-[20px] pr-[20px]  ml-[12px] mt-[27px]'>
                <button className='text-[13px] text-white h-[38px] w-[87px] leading-[13px] font-sans font-[600]'>Start a test</button>
                </div>
            </motion.div>
             
            <motion.div 
   whileInView="visible"
   viewport={{ always: true }}
  variants={{
    visible: { opacity: 1, y: 4 },
  }}
  transition={{ duration:1,type: "spring", bounce: 0.5 }}
> 
  <p className='text-sm mt-[10px]'>Takes only 5 minutes</p>
</motion.div>

 
    
           </div> 
           
        </div>
    );
}

export default Test;