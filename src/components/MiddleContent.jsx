import React from 'react';
import TextBox from './TextBox';
import MainBanner from './MainBanner';
import SideMovingBox from './SideMovingBox';
import "../App.css";
import { TextBoxData } from '../assets/data';
import Jobs from './Jobs';
import SelfImprovement from './SelfImprovement';
import WorkWithUs from './WorkWithUs';
import MeetAheadApp from './MeetAheadApp';
import Test from './Test';

function MiddleContent({isadmin}) {
  return (
    <div> 
      <div className='pb-[50px]'>
        <MainBanner/>
      </div>

      <div className='my-[100px] py-[50px] px-5'>
        <TextBox data={TextBoxData[0]}/>
      </div>

      <div className='my-[100px] py-[50px]'>
        <SideMovingBox/>
      </div>

      {/* meet ahead app banner */}
      <MeetAheadApp/>

      {/*self improvement banner  */}
      <SelfImprovement/>

      {/*Textbox */}        
      <div className='py-[50px] my-[100px]'>
        <TextBox data={TextBoxData[1]}/>
      </div>

      {/* What others think of you box */}
      <div></div>

      {/* Before you get started */}
      <Test/>

      {/* Work with us banner */}
      <WorkWithUs/>

      {/* Open vacancies banner */}
      <Jobs isadmin={isadmin}/>
      
    </div>        
  );
}

export default MiddleContent;
