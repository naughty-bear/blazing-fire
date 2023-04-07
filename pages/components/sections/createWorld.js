import React from 'react'

export default function createWorld() {
    return (
        <section className='bg-gray-900 relative'> 
            <img src='/images/background/ormanents02.png' className='absolute z-0 lg:w-2/5 left-10'></img>
            <div className='flex flex-row max-w-screen-xl mx-auto py-32 relative z-10 px-4 Flex'>
                {/* img区域 */}
                <div className='md:w-1/2 relative Margin-B w-2/3 mx-auto'>
                    <img src='/images/banner-4.png' className='img relative top-10 left-20 z-10'></img>
                    <img src='/images/banner-2.png' className='img1 absolute left-20 top-0'></img>
                    <img src='/images/banner-3.png' className='img2 rounded-xl absolute right-0 bottom-20'></img>
                    <img src='/images/banner-3.png' className='img2 rounded-xl absolute left-0 top-12'></img>
                    <img src='/images/elements01.png' className='w-20 rounded-xl absolute right-20 top-36'></img>
                    <img src='/images/elements02.png' className='w-36 rounded-xl absolute right-40 top-0'></img>
                    <img src='/images/elements03.png' className='w-20 rounded-xl absolute left-32 bottom-8 z-20'></img>
                    <img src='/images/icon/视频播放.png' className='absolute inset-2/4 z-20 '></img>
                </div>
                {/* 文本区域 */}
                <div className='md:w-1/2 relative Margin-b'>
                    <h2 className='text-white text-5xl font-bold leading-normal ml-10 absolute top-1/3 '> The world your imagination invites you to create is almost limitless</h2>
                </div>
            </div>
        </section>
    )
}
