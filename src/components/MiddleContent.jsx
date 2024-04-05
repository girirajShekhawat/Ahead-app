import React from 'react';
import TextBox from './TextBox';
import MainBanner from './MainBanner';
import SideMovingBox from './SideMovingBox';
import "../App.css";
import {  TextBoxData } from '../assets/data';
import Jobs from './Jobs';
import SelfImprovement from './SelfImprovement';
import WorkWithUs from './WorkWithUs';
import MeetAheadApp from './MeetAheadApp';
import Test from './Test';

function MiddleContent(props) {
    
    return (
 <div> 
        
        <div className='pb-[50px]'>
            <MainBanner/>
        </div>
         <div className='my-[50px] py-[50px] px-5'>
            <TextBox data={TextBoxData[0]}/>
         </div>
         <div className='my-[50px] py-[50px]'>
            <SideMovingBox/>
         </div>
      
       {/* meet ahead app banner */}
        <MeetAheadApp/>
      
        
  {/*self improvement banner  */}
          <SelfImprovement/>
            
    {/*Textbox */}        
            <div className='py-[50px] my-[50px]'>
            <TextBox data={TextBoxData[1]}/>
            </div>
            

        {/* What other think of you box */}
            <div>
         
            </div>


         {/*Before you get started*/}
           <Test/>


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