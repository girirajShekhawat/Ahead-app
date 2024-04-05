import React, { useState } from 'react';
import { vacancies } from '../assets/data';
import { motion } from 'framer-motion';
function Jobs(props) {
 

    return (
        <div>
              <div className='flex flex-col py-[50px] my-[100px]'>
           <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ always:true }}
           transition={{ duration: 1.7,  type: "spring",bounce:0.4, ease: "easeInOut" }}
           variants={{
             visible: { opacity: 1, scale: 1, x: 0, y: 0 },
             hidden: { opacity: 0, scale: 0.5, x: "-50%" },}}
           >
           <h1 className='text-4xl font-bold'>Open vacancies</h1>
           </motion.div>

            <div className='flex gap-8 mt-12'>
                {vacancies.map((job,index)=>{

 
              return <HoveredCard key={index} index={index} jobs={job}/>
            
            })}
      
            
                
            
            </div>
           </div>
        </div>
    );
}

// hovered card component

const HoveredCard=({index,jobs})=>{
  const [showButton,setShowButton]=useState(false)

  return(
     <>
     <motion.div
     initial={{height:160}}
     whileHover={{height:230}}
     key={index}
     onHoverStart={() => setShowButton(true)}
     onHoverEnd={() => setShowButton(false)}
    transition={{ ease: "easeInOut", duration: 0.2 }}
     className='bg-[#fefbec] hover:bg-[#ece7d1] rounded-lg  cursor-pointer '
    >
               <div className="rounded-2xl p-6 px-12">
          <h2 className="text-xl font-bold">{jobs.jobTitle}</h2>

          <ul className="mt-4 text-sm font-semibold list-disc pl-4">
            <li className="text-sm font-normal mb-1">{jobs.position}</li>
            <li className="text-sm font-normal mb-1">{jobs.location}</li>
            <li className="text-sm font-normal">{jobs.pay}</li>
          </ul>
        </div>

        {showButton && 
          <motion.button
          initial="hidden"
          whileInView="visible"
          transition={{ ease: "easeInOut", duration: 0.3,delay:0.1  }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.7 },
          }}
          className="mx-12 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-3 "
          >
         Apply
          </motion.button>
        }

     </motion.div>

     </>
  )

}




export default Jobs;