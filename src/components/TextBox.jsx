// import React from 'react';

// function TextBox(props) {
//     return (
//         <div className='flex justify-between'>
//             <h1 className='text-[20px] font-[500] leading-[29px] font-sans'>EQ beats IQ</h1>
//              <p className='text-[14px] font-[600] leading-[21px]'>People with high emotional intelligence(EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
//              <p>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
//         </div>
//     );
// }

// export default TextBox;



import React from 'react';

function TextBox(props) {
    return (
        <div className='flex justify-between'>
            <h1 className='text-lg font-medium leading-7 w-1/2'>EQ beats IQ</h1>
            <span className="flex justify-between w-full"> 
            <p className='text-base text-wrap'>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
            <p className='text-base text-wrap'>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
            </span>
        </div>
    );
}

export default TextBox;