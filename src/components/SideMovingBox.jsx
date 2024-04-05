import React from 'react';

function SideMovingBox(props) {
    return (
        <div className=' relative  h-[300px]'>
            <h1 className=' font-[700] text-[30px] leading-[29px] font-sans ml-[30px] mb-[40px]  '>Does this sound familiar...</h1>
            <img src='src\assets\TeddyImage.svg' alt='teddyImg' className='h-[80px] w-[70px]  absolute -top-[30px] right-[170px] -rotate-[19deg]'/>

<div className='flex justify-between items-center h-[220px]   overflow-x-auto w-[1000px] no-scrollbar '>
    <div className='bg-[#eeebfe] mx-[10px] rounded-xl pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px]   '>
        <h3 className='text-lg font-bold'>😠</h3>
        <h3 className='text-base font-bold'>You argue with a colleague</h3>
        <p className='text-sm text-balance'>You get angry and defensive, instead of staying open and working towards common ground.</p>
    </div>
    <div className='bg-[#ffefd5] mx-[10px] rounded-xl  pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px] '>
        <h3 className='text-lg font-bold'>😮</h3>
        <h3 className='text-base font-bold'>You get a promotion at work</h3>
        <p className='text-sm'>You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</p>
    </div>
    <div className='bg-[#6341ef] mx-[10px] rounded-xl   pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px]  -rotate-6'>
        <h3 className='text-lg font-bold'>🫤</h3>
        <h3 className='text-base font-bold'>You attend a class regularly</h3>
        <p className='text-sm'>You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</p>
    </div>
    <div className='bg-[#d8f2ff] mx-[10px] rounded-xl   pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px] '>
        <h3 className='text-lg font-bold'>😦</h3>
        <h3 className='text-base font-bold'>You argue with a colleague</h3>
        <p className='text-sm'>You get angry and defensive, instead of staying open and working towards common ground.</p>
    </div>
    <div className='bg-[#f47171] mx-[10px] rounded-xl  pl-[30px] pr-[30px] pt-[30px] pb-[10px]  h-[180px] min-w-[280px] '>
        <h3 className='text-lg font-bold'>🥱</h3>
        <h3 className='text-base font-bold'>You argue with a colleague</h3>
        <p className='text-sm'>You get angry and defensive, instead of staying open and working towards common ground.</p>
    </div>
</div>

            
        </div>
    );
}

export default SideMovingBox;





