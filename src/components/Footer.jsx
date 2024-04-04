import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer(props) {
    return (<>
        <div className='h-[2px] w-full bg-gray-300 my-[50px]'></div>
        <div className='flex flex-col items-center'>
            <div>
            <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ad/99/de/ad99ded3-b344-aa25-1754-4ede9c532190/AppIcon-1x_U007ephone-0-85-220.png/246x0w.webp' alt="logo"
             className='h-[48px] w-[48px] rounded-md object-contain'/>
            <h1>ahead</h1>
            </div>
            <div className='flex'>
                <span>
              <span><FaLocationDot /></span>
                Augrether 26, 100117 Berlin
                </span>
                <span>
                <span><IoMdMail /></span>
                hi@ahead-app.com
                </span>
            </div>
            <div>
            <img src="src\assets\downloadIcon.png" alt='download Icon' className='h-[60px] w-[50px] object-contain'/>
            </div>
            <p>&copy; {new Date().getFullYear()} Ahead app. All right reserved</p>
             
        </div>

        </>
    );
}

export default Footer;