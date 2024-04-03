import React from 'react';
import TextBox from './TextBox';

function MiddleContent(props) {
    return (
 <div> 
       {/* meet ahead app banner */}
        <div className='bg-[#fef7f1] flex '>
            <div className='flex flex-col'>
            <p>Buit out of the frustration</p>
            <h1>Meet the ahead app</h1>
            <div>
                <img src='src\assets\TeddyImg2.svg' alt='teddyImg' className=' h-[100px] w-[100px] mix-blend-multiply'/>
            </div>
            </div>
            <div className='flex flex-col'>
                <p>
                    A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
                </p>
                <p>
                    Think of it as a pocket cheerleader towards a better, more fulfilling.
                </p>
            </div>
        </div>
      
        
  {/*self improvement banner  */}
        <div>
            <div>
                <p>Wrong with self-improvement & how we're fixing it.</p>
                <h1>Self-improvement.Ugh.</h1>
            </div>
            <div>
                <ul>
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
            </div>

            <TextBox/>

        {/* What other think of you box */}
            <div>
         
            </div>


         {/*Before you get started*/}
           <div>
            <p>We take privacy seriously</p>
            <h1>Before you get started</h1>
            <p>"We won't share your answers with anyone(and won't ever tell you which friends said about you)"</p>
            
            <p>with love, 
                {/* here we need the aniamtion*/}
                <span>Team ahead app</span>
            </p>
           
            <div className='h-[40px] w-[127px]   bg-[#0d0c22] rounded-full   flex items-center pl-[20px] pr-[20px]  ml-[12px]'>
                <button className='text-[13px] text-white h-[38px] w-[87px] leading-[13px] font-sans font-[600]'>Start a test</button>
            </div>
            <p>Takes only 5 minutes</p>

           </div>


           {/* Work with us banner */}
           <div>
            <div>
                <h1>Work with us</h1>
                <div>
                    <img src='src\assets\TeddyImg2.svg' alt='teddy Img'/>
                    <H1>About</H1>
                    <p>At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what ahead is all about!</p>
                <div>
                    <h1>Product</h1> 
                    <p>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
                </div>
                </div>

            </div>
            <div>
                <h1>ahead</h1>
                <div>
                    <h1>Power through, even when the going gets tough</h1>
                    <p>We help you spot and work around whatever stands in the way, ve it vad habits, fear, etc.</p>
                </div>
                <div>
                    <h1>
                        Learn more about who you are and where you want to go.
                    </h1>
                    <p>We ask the right questions to help you better understand why you do things the way you do.</p>
                </div>
                <div>
                    <h1>
                        Plan and grow together with others on the same journey
                    </h1>
                    <p>
                        Ahead feels like a games, not like a chore. See yourself grow everyday towards achieving your goals!
                    </p>
                </div>
                <div>
                    <h1>Power through, even when the going gets tough</h1>
                    <p>We help you spot and work around whatever stands in the way, ve it vad habits, fear, etc.</p>
                </div>
                <div>
                    <h1>
                        Learn more about who you are and where you want to go.
                    </h1>
                    <p>We ask the right questions to help you better understand why you do things the way you do.</p>
                </div>
                <div>
                    <h1>
                        Plan and grow together with others on the same journey
                    </h1>
                    <p>
                        Ahead feels like a games, not like a chore. See yourself grow everyday towards achieving your goals!
                    </p>
                </div>
            </div>
           </div>

           {/* Open vacancies banner */}
           <div>
            <div>
                <h1>Senior Full-Stack Engineer</h1>
                <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote </li>
                    <li>$65-85K and share options</li>
                </ul>
            </div>
            <div>
                <h1>Senior Designer</h1>
                <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote </li>
                    <li>$65-85K and share options</li>
                </ul>
            </div>
            <div>
                <h1>Superstar Intern</h1>
                <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote </li>
                    <li>$65-85K and share options</li>
                </ul>
            </div>
           </div>

        </div>



</div>        
    );
}

export default MiddleContent;