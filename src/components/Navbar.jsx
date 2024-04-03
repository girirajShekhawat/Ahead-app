import React from 'react'; 

 
function Navbar(props) {
    return (
        <div>
           <nav className='flex justify-between items-center px-[40px] h-[100px]'>
            <div>
       <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ad/99/de/ad99ded3-b344-aa25-1754-4ede9c532190/AppIcon-1x_U007ephone-0-85-220.png/246x0w.webp' alt="logo"
        className='h-[48px] w-[48px] rounded-md object-contain'/>
            </div>
            <div className='  h-[14px] w-[475px] flex items-center  '>
             <ul className=' box-border flex    font-sans text-[14px] font-[600] leading-[28px] text-[#0d0c22]'>
                <li className='px-[16px]'>Emotions</li>
                <li className='px-[16px]'>Manifesto</li>
                <li className=' w-[138px] pr-[16px]'>Self-awareness test</li>
                <li className=' w-[138px] pr-[16px]'>Work With Us</li>
             </ul>
            </div>
            <div className='h-[40px] w-[127px]   bg-[#0d0c22] rounded-full   flex items-center pl-[20px] pr-[20px]  ml-[12px]'>
                <button className='text-[13px] text-white h-[38px] w-[87px] leading-[13px] font-sans font-[600]'>Download app</button>
            </div>
           </nav>
        </div>
    );
}

export default Navbar;