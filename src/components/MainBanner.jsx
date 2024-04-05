import React from 'react';
import "../App.css" 

function MainBanner(props) {
    return (
        <div className='flex justify-between items-center   bg-[#eeebfe] rounded-[23px] h-[500px] p-[50px] overflow-hidden'>
            <div className=''>
            <div className='flex flex-col  relative '>
                <p className='font-bold text-sm mb-[7px]'>Ahead app</p>
                <h1 className='text-5xl font-bold text-wrap w-[400px] leading-[45px]'>
                    Master your life by mastering emotions
                </h1>
                 {/* small circle element */}
                <span className='absolute h-[25px] w-[25px] rounded-full  -top-[80px] left-[360px] bg-[#f2c8c9]'></span>
                {/* shaded circle region */}
                <span className='absolute h-[10px] w-[10px] rounded-full bg-[#e9695b] ring-8  ring-[#f7d2bf] -top-[10px] left-[250px]'></span>
                {/* leaf element */}
                <span className="  w-[50px] h-[30px] bg-[#75c496] overflow-hidden customleaf absolute left-[280px] -top-[70px] rotate-[10deg]"></span> 
                  {/* full leaf */}
                  <span className='leaf absolute -top-[150px] left-[60px] -rotate-[90deg]'></span>
                {/* circle    */}
                <span className='h-[30px] w-[30px] rounded-full bg-[#f1c7c7] absolute -left-[63px] top-[150px]'></span>
                {/* circle    */}
                <span className='h-[30px] w-[30px] rounded-full bg-[#e86858] absolute left-[200px] -bottom-[133px]'></span>
                <div className='flex items-center   gap-5'>
                    <img src="src\assets\downloadIcon.png" alt='download Icon' className='h-[100px] w-[100px]   '/>
                    <div className='flex flex-col mb-2'>
                        <div className='flex '> 
                        {[...Array(5)].map((star)=>(
                      <img src='src\assets\starIcon.svg' alt='Rating Icon' className='h-[16px]    '/>
                        ))}
                         </div>  
                        
                        <p className='h-[10px] w-[138px] text-sm font-light'>100+ App Store reviews</p>
                    </div>
                </div>
            </div>
            </div>

            {/* Banner's Right part */}
            <div>
              <div className='rounded-full border-2 border-dashed border-white p-16 relative'>
                 {/* circle    */}
                 <span className='h-[30px] w-[30px] rounded-full bg-[#f1c7c7] absolute right-[50px] -top-[42px]'></span>
                <img src='src\assets\TeddyImage.svg' alt='teddyImg' className='h-[70px] w-[70px]  absolute top-4 right-9 -rotate-[40deg]'/>
                <img src='src\assets\newGhost.png' alt='teddyImg' className='h-[70px] w-[70px]  absolute top-5 left-9 rotate-[220deg]'/>
                <img src='src\assets\blue-ghost.webp' alt='teddyImg' className='h-[70px] w-[70px]  absolute -bottom-[30px] left-[190px] rotate-1 '/>
                <img src='src\assets\blue-ghost.webp' alt='teddyImg' className='h-[30px] w-[30px]  absolute bottom-[90px] left-[390px] rotate-5 '/>
                <img src='src\assets\TeddyImage.svg' alt='teddyImg' className='h-[40px] w-[40px]  absolute top-[190px] -left-[20px] -rotate-[4 deg]'/>
                <div className='bg-[#e2dbfd] flex h-[310px] w-[310px] rounded-full items-center  justify-start  object-contain'>
                    <img src='src\assets\aheadAppAssets.jpg' alt="Vaochar Img" className='h-[120px] w-[120px] rounded-lg '/>
                    <img src='src\assets\AheadAppHomeImg.jpg' alt='Phone Img' className='h-[340px] w-[150px] border-2 border-solid border-black rounded-lg  '/>
                </div>
              </div>
            </div>
            
        </div>
    );
}

export default MainBanner;