import React from 'react'

export default function hero() {
    return (
        <div className='bg-black pb-20 relative'>
            <img src='/images/background/ormanents02.png' className='absolute z-0 w-2/4 -top-40 right-10'></img>
            {/* 固定背景图 */}
            <div>
                <img src='/images/banner-9.png' className='bg-fixed fixed  top-0 -z-10  w-full'></img>
            </div>
            <div className=" flex  max-w-screen-xl lg:flex-row sm:flex-col mx-auto md:p-5 py-24 relative z-10">
                <div className='pt-24 md:w-1/2'>
                    <text className='accent-focus text-sm span font-bold'>WELCOME TO BLAZINGFIRE</text> <br />
                    <div className='text-6xl leading-normal text-white mt-3 font-bold'>Enjoy Your Virtual Reality Experience with BLAZINGFIRE<span className='span'>.</span></div> <br />
                    <div className='mb-10'>Blazingfire is a start-up that leverages cutting-edge virtual reality and generative AI technologies (such as 360 photography and video or VR headsets) in different areas especially real estate to create immersive experiences for users.</div>
                    <div className="flex flex-row">
                        <button className=' button bg-gradient-to-r from-pink-500 to-blue-500 hover:text-black'>Back a demo</button>
                        <button className=' button sort-btn  bg-transparent'><a>Contact Us <span className='font-thin text-xs'>↗️</span></a></button>
                    </div>
                </div>
                <div className=" relative md:w-1/2 h-full">
                    <img src='/images/banner.png ' className="img max-w-xl absolute z-20 top-20 right-12"></img>
                    <img src='/images/banner-2.png' className="rotate-12 absolute top-16 right-10 max-w-md z-0 "></img>
                    <img src='/images/banner-3.png' className='absolute top-16 left-12 w-64 z-10 rounded-xl '></img>
                    <img src='/images/elements01.png' className='absolute top-32 right-16 w-24 z-50'></img>
                    <img src='/images/elements02.png' className='absolute top-96 left-8 w-28 z-50 '></img>
                    <img src='/images/elements03.png' className='absolute top-12 right-40 w-32 z-50'></img>
                </div>
            </div>
        </div>
    )
}
