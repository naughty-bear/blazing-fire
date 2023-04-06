import React from 'react'

export default function choose() {
    return (
        <section className='bg-black relative px-4'>
            <img src='/images/background/ormanents03.png' className='absolute -z-0 mt-20 opacity-50'></img>
            <div className='max-w-screen-xl mx-auto pt-32 relative z-10 '>
                {/* 文本区域 */}
                <div className='text-center lg:px-60 md:px-32'>
                    <h2 className='text-5xl font-bold text-white mb-10'>Why choose us?</h2>
                    <p className='text-gray-400'>This company is supported by UCL Innovation & Enterprise.our technical experts are from UCL's VR studio and oxford university. With a thorough understanding of the field of VR, AI,360 footage, and professional software, we provide top-quality services.</p>
                </div>
                {/* 内容区域 */}
                <div className='flex flex-row text-white text-xl mt-10 Flex text-center'>
                    {/* 左 */}
                    <div className='lg:w-1/3 mt-10 flex flex-col'>
                        <ul className='w-full'>
                            <li className='flex mt-10 flex-space '>
                                <h2 className='my-auto'>Multi-culture and bilingual advantage -- integration from East to West</h2>
                                <img src='/images/elements01.png' className='w-20'></img>
                            </li>
                            <li className='flex mt-10 flex-space '>
                                <h2 className='my-auto'>Future-proof</h2>
                                <img src='/images/elements02.png' className='w-20'></img>
                            </li>
                            <li className='flex mt-10 flex-space'>
                                <h2 className='my-auto'>Prior experience in virtual tours</h2>
                                <img src='/images/elements02.png' className='w-20'></img>
                            </li>
                        </ul>
                    </div>
                    {/* 中 */}
                    <div clssName='mx-auto lg:w-1/3'>
                        <img src='/images/banner.png' className='max-w-xl  mr-10'></img>
                    </div>
                    {/* 右 */}
                    <div className='lg:w-1/3 mt-10'>
                        <ul className=' max-w-full'>
                            <li className='flex mt-10 flex-space ' >
                                <img src='/images/elements01.png' className='w-20'></img>
                                <h2 className='my-auto'>Technical know how</h2>
                            </li>
                            <li className='flex mt-10 flex-space'>
                                <img src='/images/elements02.png' className='w-20 '></img>
                                <h2 className='my-auto'>Excellent value</h2>
                            </li>
                            <li className='flex mt-10 flex-space'>
                                <img src='/images/elements02.png' className='w-20'></img>
                                <h2 className='my-auto'>Flexible and Smooth communication</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
