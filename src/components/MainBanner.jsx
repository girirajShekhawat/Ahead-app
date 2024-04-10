import React from 'react';
import "../App.css" 
import { motion, spring } from 'framer-motion';

function MainBanner(props) {
    return (
        <div className='flex justify-between items-center bg-[#eeebfe] rounded-[23px] h-[500px] p-[50px] overflow-hidden'>
            <div>
                <div className='flex flex-col relative'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{always:true}}
                        transition={{duration:1.7,type:"spring",bounce:0.4}}
                        variants={{
                            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                            hidden: { opacity: 0, scale: 0.5, x: "-20%" },
                        }}
                    >
                        <p className='font-bold text-sm mb-[7px]'>Ahead app</p>
                        <h1 className='text-5xl font-bold text-wrap w-[400px] leading-[45px]'>
                            Master your life by mastering emotions
                        </h1>
                    </motion.div>


                    {/* small circle element */}
                    <motion.div
                        whileInView="visible"
                        viewport={{ always: true }}
                        initial="hidden"
                        variants={{
                            visible: {
                                x: [15, 10],
                                y: [0, -20],
                                rotate: 25,
                            },
                            hidden: { y: 25 },
                        }}
                        transition={{
                            type: "tween",
                            duration: 1.2,
                            ease: "easeInOut",
                            delay:0.3
                        }}
                        className='absolute h-[25px] w-[25px] rounded-full -top-[80px] left-[360px] bg-[#f2c8c9]'
                    ></motion.div>


                    {/* shaded circle region */}
                    <motion.div
                        whileInView="visible"
                        viewport={{ always: true }}
                        initial="hidden"
                        variants={{
                            visible: {
                                x: [15, 10],
                                y: [0, -20],
                                rotate: 25,
                            },
                            hidden: { y: 25 },
                        }}
                        transition={{
                            type: "tween",
                            duration: 1.2,
                            ease: "easeInOut",
                            delay:0.3
                        }}
                        className='absolute h-[10px] w-[10px] rounded-full bg-[#e9695b] ring-8 ring-[#f7d2bf] -top-[10px] left-[250px]'
                    ></motion.div>


                    {/* leaf element */}
                    <motion.div
                        whileInView="visible"
                        viewport={{ always: true }}
                        initial="hidden"
                        variants={{
                            visible: {
                                x: [15, 10],
                                y: [0, -20],
                                rotate: 360,
                            },
                            hidden: { y: 25 },
                        }}
                        transition={{
                            type: "tween",
                            duration: 1.2,
                            ease: "easeInOut",
                            delay:0.3
                        }}
                        className="w-[50px] h-[30px] bg-[#75c496] overflow-hidden customleaf absolute left-[280px] -top-[70px] rotate-[10deg]"
                    ></motion.div>


                    {/* full leaf */}
                    <motion.div
                        whileInView="visible" 
                        viewport={{ always: true }} 
                        animate={{ x :-10, y:10 ,rotate:360}} 
                        transition={{ type: "spring", duration:2, bounce: 0.4 }} 
                        className='leaf absolute -top-[150px] left-[60px] -rotate-[90deg]'
                    ></motion.div>


                    {/* left most orange circle */}
                    <motion.div
                        whileInView="visible" 
                        viewport={{ always: true }} 
                        animate={{ x :3, y:20 }} 
                        transition={{ type: "spring", duration:4, bounce: 0.4 }} 
                        className='h-[30px] w-[30px] rounded-full bg-[#f1c7c7] absolute -left-[63px] top-[150px]'
                    ></motion.div>
                    {/*Red circle */}
                    <motion.div
                        whileInView="visible" 
                        viewport={{ always: true }} 
                        animate={{ x :40, y:0 }} 
                        transition={{ type: "spring", duration:4, bounce: 0.4 }} 
                        className='h-[30px] w-[30px] rounded-full bg-[#e86858] absolute left-[200px] -bottom-[133px]'
                    ></motion.div>
                    <div className='flex items-center gap-5'>
                        <img src="/downloadIcon.png" alt='download Icon' className='h-[100px] w-[100px]'/>
                        <div className='flex flex-col mb-2'>
                            <div className='flex'> 
                                {[...Array(5)].map((star)=>(
                                    <img src='/starIcon.svg' alt='Rating Icon' className='h-[16px]'/>
                                ))}
                            </div>  
                            <p className='h-[10px] w-[138px] text-sm font-light'>100+ App Store reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* Banner's Right part */}
            <div>
                <motion.div
                    whileInView="visible"
                    viewport={{ once: true }}
                    initial="hidden"
                    variants={{
                        hidden: { opacity: 1 },
                        visible: { opacity: 1, rotate: 360 },
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    className='rounded-full border-2 border-dashed border-white p-16 relative'>
                    {/*right most circle */}
                    <motion.div
                        whileInView="visible" 
                        viewport={{ always: true }} 
                        animate={{ x :-10, y:0 }} 
                        transition={{ type: "spring", duration:4, bounce: 0.4 }} 
                        className='h-[30px] w-[30px] rounded-full bg-[#f1c7c7] absolute right-[50px] -top-[42px]'
                    ></motion.div>
                    <motion.div 
                        whileInView="visible" 
                        viewport={{ once: true }} 
                        animate={{ rotate: 360 }} 
                        transition={{ type: "spring", duration: 4, bounce: 0.4 }}
                        className='absolute top-4 right-9 -rotate-[40deg]'>
                        <img src='/TeddyImage.svg' alt='teddyImg' className='h-[70px] w-[70px]'/>
                    </motion.div>
                    <img src='/newGhost.png' alt='teddyImg' className='h-[70px] w-[70px] absolute top-5 left-9 rotate-[220deg]'/>
                    <img src='/blue-ghost.webp' alt='teddyImg' className='h-[70px] w-[70px] absolute -bottom-[30px] left-[190px] rotate-1'/>
                    <img src='/blue-ghost.webp' alt='teddyImg' className='h-[30px] w-[30px] absolute bottom-[90px] left-[390px] rotate-5'/>
                    <img src='/TeddyImage.svg' alt='teddyImg' className='h-[40px] w-[40px] absolute top-[190px] -left-[20px] -rotate-[4 deg]'/>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden:{opacity:1 ,x:0, y:0,scale:0.5, rotate:0},
                            visible:{opacity:1,x:0,y:0, scale:1, rotate:0}
                        }}
                        transition={{type:spring,bounce:0.3,delay:0.2, duration:2 ,ease:"easeInOut"}}>
                        <div className='bg-[#e2dbfd] flex h-[310px] w-[310px] rounded-full items-center justify-start object-contain'>
                            <img src='/aheadAppAssets.jpg' alt="Vaochar Img" className='h-[120px] w-[120px] rounded-lg'/>
                            <img src='/AheadAppHomeImg.jpg' alt='Phone Img' className='h-[340px] w-[150px] border-2 border-solid border-black rounded-lg'/>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default MainBanner;
