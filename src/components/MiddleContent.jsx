import React from 'react';
import TextBox from './TextBox';
import MainBanner from './MainBanner';
import SideMovingBox from './SideMovingBox';
import "../App.css";
import { selfImprovementElementData  } from '../assets/data';
import Jobs from './Jobs';
import SelfImprovement from './SelfImprovement';
import WorkWithUs from './WorkWithUs';

function MiddleContent(props) {
    
    return (
 <div> 
        
        <div className='pb-[50px]'>
            <MainBanner/>
        </div>
         <div className='py-[50px] px-5'>
            <TextBox/>
         </div>
         <div className='py-[50px]'>
            <SideMovingBox/>
         </div>
      
       {/* meet ahead app banner */}
       <div className='relative'> 
        <div className='bg-[#fef7f1] flex py-[50px] h-[450px] rounded-[23px] overflow-hidden'>
            <div className='flex flex-col w-full  relative '>
            <span className='justify-start ml-[35px] mt-[50px]'>
            <p className='text-sm font-bold  '>Built out of frustration</p>
            <h1 className='font-[700] text-[30px] leading-[29px] font-sans mt-[12px]'>Meet the ahead app</h1>
            </span>
            {/* circle element */}
            <span className='absolute h-[200px] w-[200px] -left-[60px]  -bottom-[20px] bg-[#fae8dc] rounded-full '></span>
            
             {/* shaded circle element */}
            <span className='absolute h-[10px] w-[10px] rounded-full bg-[#e9695b] ring-8  ring-[#f7d2bf] top-[300px] left-[260px]'></span>
             
             {/* small circle element */}
            <span className='absolute h-[20px] w-[20px] rounded-full  top-[200px] left-[310px] bg-[#f2c8c9]'></span>
            {/* leaf element */}
            <span className="  w-[50px] h-[30px] bg-[#75c496] overflow-hidden customleaf absolute left-[260px] top-[240px] -rotate-[40deg]"></span>
           
            {/* sun element */}
             <span className='h-[44px] w-[44px] absolute left-[150px] bottom-[150px] z-10'>
                <img src='src\assets\sun badge.webp' alt="sun image"/>
             </span>
            <div className=' absolute left-[100px] bottom-[30px]  h-[150px] w-[150px] rounded-full border-[10px] border-solid border-[#f4f6f6] bg-white'>
                <img src='src\assets\TeddyImg2.svg' alt='teddyImg' className='  mix-blend-multiply'/>
            </div>
            </div>
            <div className='flex flex-col w-full justify-center items-start mt-[100px] mr-[50px]  '>
                 {/* flower element */}
                 <span className='h-[48px] w-[48px] absolute right-[56px] -top-[27px]   '>
                    <img src='src\assets\flowerImg.webp' alt='flowerImg' />
                 </span>

                {/* leaf element */}
            <span className="  w-[50px] h-[30px] bg-[#75c496] overflow-hidden customleaf absolute right-[100px] top-[50px] -rotate-[20deg]"></span>
                
                <p className='text-[16px] font-[400] leading-[23px]   text-black'>
                    A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
                </p>
                <p className='text-[16px] font-[400] leading-[23px]   text-black mt-[10px]'>
                    Think of it as a pocket cheerleader towards a better, more fulfilling.
                </p>
            </div>
        </div>
        </div>
      
        
  {/*self improvement banner  */}
          <SelfImprovement/>
            
    {/*Textbox */}        
            <div className='py-[50px]'>
            <TextBox/>
            </div>
            

        {/* What other think of you box */}
            <div>
         
            </div>


         {/*Before you get started*/}
           <div className='flex flex-col items-center  py-[50px]'>
            <p className='text-sm font-bold  '>We take privacy seriously</p>
            <h1 className='font-[700] text-[30px] leading-[29px] font-sans mt-[12px]'>Before you get started</h1>
            <p className="text-xl font-normal mt-[12px] text-wrap mx-[90px] items-center leading-[29px] text-center ">"We won't share your answers with anyone(and  won't ever tell you  which friends said about you)"  </p>
            
            <p className='text-sm font-bold mt-[17px] '>with love, 
                {/* here we need the aniamtion*/}
                <span>Team ahead app</span>
            </p>
           
            <div className='h-[40px] w-[127px]   bg-[#0d0c22] rounded-full   flex items-center pl-[20px] pr-[20px]  ml-[12px] mt-[27px]'>
                <button className='text-[13px] text-white h-[38px] w-[87px] leading-[13px] font-sans font-[600]'>Start a test</button>
            </div>
            <p className='text-sm mt-[10px]'>Takes only 5 minutes</p>

           </div>


           {/* Work with us banner */}
            <WorkWithUs/>

           {/* Open vacancies banner */}
          <Jobs/>
 



</div>        
    );
}

export default MiddleContent;














{/* <div className='flex flex-col py-[50px]'>
<div>
    <p>Wrong with self-improvement & how we're fixing it.</p>
    <h1>Self-improvement.Ugh.</h1>
</div>
<div className='flex justify-end'>
    <ul className='flex flex-col '>
       <li>
        <h3>It's not as easy as 1-2-3.</h3>
        <p>The journey of change may be long, but our sessions are quick, We get to the point and tell you what you want to know (and nothing else.)</p>
       </li>
       <li>
        <h3>Old habits are hard to break.</h3>
        <p>And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.</p>
       </li>
       <li>
        <h3>You and your motivation don't have a long-term relationship.</h3>
        <p>Luckily, we can proactively prepare you for the marathone, not just the race. Effective, memorable exercisewill help you stick to your goals.</p>
       </li>
       <li>
        <h3>Books just don't offer practical solutions.</h3>
        <p>Books just don't offer practical solutions, and for practical solutions we need a experince's advise.</p>
       </li>
       <li>
       <h3>You and your motivation don't have a long-term relationship.</h3>
        <p>Luckily, we can proactively prepare you for the marathone, not just the race. Effective, memorable exercisewill help you stick to your goals.</p>
       </li>
       <li><h3>It's not as easy as 1-2-3.</h3>
        <p>The journey of change may be long, but our sessions are quick, We get to the point and tell you what you want to know (and nothing else.)</p>
        </li>
       <li><h3>You and your motivation don't have a long-term relationship.</h3>
        <p>Luckily, we can proactively prepare you for the marathone, not just the race. Effective, memorable exercisewill help you stick to your goals.</p>
        </li>
       <li><h3>Old habits are hard to break.</h3>
        <p>And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.</p>
        </li>
    </ul>
</div> */}