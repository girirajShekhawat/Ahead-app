import React from 'react';
 

function MainBanner(props) {
    return (
        <div className='flex justify-around items-center bg-[#eeebfe] rounded-[23px] h-[400px]'>
            <div className=''>
            <div className='flex flex-col'>
                <p>Ahead app</p>
                <h1>
                    Master your life by mastering emotions
                </h1>
                <div className='flex'>
                    <img src="src\assets\downloadIcon.png" alt='download Icon' className='h-[60px] w-[50px] object-contain'/>
                    <div className='flex flex-col'>
                        <img src='src\assets\five-stars-rating.jpg' alt='Rating Icon' className='h-[30px] w-[50px] mix-blend-multiply object-contain'/>
                        <span className='h-[30px] w-[50px]'>100+ App Store reviews</span>
                    </div>
                </div>
            </div>
            </div>

            {/* Banners Right part */}
            <div>
              <div className='rounded-full border-2 border-dashed border-white p-20 relative'>
                <img src='src\assets\TeddyImage.svg' alt='teddyImg' className='h-[70px] w-[70px]  absolute top-0 right-9 rotate-1'/>
                <img src='src\assets\TeddyImage.svg' alt='teddyImg' className='h-[70px] w-[70px]  absolute top-0 left-9 rotate-1'/>
                <img src='src\assets\TeddyImage.svg' alt='teddyImg' className='h-[70px] w-[70px]  absolute bottom-2 left-40 rotate-1'/>
                <div className='bg-[#e2dbfd] flex h-[210px] w-[210px] rounded-full items-center justify-start object-contain'>
                    <img src='src\assets\aheadAppAssets.jpg' alt="Vaochar Img" className='h-[70px] w-[70px] rounded-lg '/>
                    <img src='src\assets\AheadAppHomeImg.jpg' alt='Phone Img' className='h-[170px] w-[80px] border-2 border-solid border-black rounded-lg  '/>
                </div>
              </div>
            </div>
            
        </div>
    );
}

export default MainBanner;