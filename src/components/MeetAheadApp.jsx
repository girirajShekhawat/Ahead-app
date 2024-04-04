import React from 'react';

function MeetAheadApp(props) {
    return (
        <div className='relative my-[50px]'> 
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
            <span className='absolute h-[25px] w-[25px] rounded-full  top-[200px] left-[310px] bg-[#f2c8c9]'></span>
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
    );
}

export default MeetAheadApp;