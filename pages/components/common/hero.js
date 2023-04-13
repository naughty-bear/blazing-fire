import React from 'react'
import 'animate.css'
import { motion } from "framer-motion";
export default function hero() {
    return (
        <motion.div className='bg-black pb-20 relative'>
            <img src='/images/background/ormanents02.png' className='absolute z-0 w-2/4 -top-40 right-10 bg'></img>
            {/* 固定背景图 */}
            <div>
                <img src='/images/banner-9.png' className='bg-fixed fixed  top-0 -z-10  w-full h-full'></img>
            </div>
            <div className=" flex flex-row Flex-r px-4  max-w-screen-xl  mx-auto  py-24 relative z-10 ">
                <div className='pt-24 md:w-1/2  Margin-T animate__animated animate__slideInLeft '>
                    <text className='accent-focus text-sm span font-bold'>WELCOME TO BLAZINGFIRE</text> <br />
                    <div className='lg:text-6xl md:text-5xl text-4xl leading-normal text-white mt-3 font-bold'>Enjoy Your Virtual Reality Experience with BLAZINGFIRE<span className='span'>.</span></div> <br />
                    <div className='mb-10 text-gray-400'>Blazingfire is a start-up that leverages cutting-edge virtual reality and generative AI technologies (such as 360 photography and video or VR headsets) in different areas especially real estate to create immersive experiences for users.</div>
                    <div className="flex flex-row Flex">
                        <button className=' button bg-gradient-to-r from-pink-500 to-blue-500 transition ease-in hover:text-black'>Back a demo</button>
                        <button className=' button sort-btn  bg-transparent Margin-t transition ease-in'><a>Contact Us <span className='font-thin text-xs'>↗️</span></a></button>
                    </div>
                </div>
                <div className="relative md:w-1/2 mt-30 w-2/3 mx-auto">
                    <img src='/images/banner.png ' className="img absolute z-20 top-20 right-12 animate__animated animate__zoomIn"></img>
                    <img src='/images/banner-2.png' className="rotate-12 absolute top-16 right-10 w-96 z-0 img1"></img>
                    <img src='/images/banner-3.png' className='absolute top-16 left-12 w-64 z-10 rounded-xl img2  animate__animated animate__slideInRight'></img>
                    <img src='/images/elements01.png' className='absolute top-32 right-16 w-24 z-50 slide-bck-tr  animate__animated animate__slideInRight'></img>
                    <img src='/images/elements02.png' className='absolute top-96 left-8 w-28 z-50  lg:block hidden  animate__animated animate__slideInRight'></img>
                    <img src='/images/elements03.png' className='absolute top-12 right-40 w-32 z-50  animate__animated animate__slideInRight'></img>
                </div>
            </div>
        </motion.div>
    )
}
