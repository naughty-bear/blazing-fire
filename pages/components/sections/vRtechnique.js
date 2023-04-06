import React from 'react'

export default function vRtechnique() {
    return (
        <section className='w-screen bg-black relative'>
        <img src='/images/background/ormanents02.png' className='absolute z-0 w-2/4 -top-32'></img>
            <div className='max-w-screen-xl mx-auto flex flex-row py-20 px-4 relative z-10 Flex '>
                {/* 左侧 */}
                <div className='lg:w-3/5 md:w-2/4 flex flex-row flex-wrap md:relative mt-20 '>
                    <img src='/images/banner-4.png'  className='md:w-96 h-80 absolute top-6 mr-8 Width'></img>
                    <img src='/images/banner-5.jpeg' className='w-96 h-60 absolute top-8 right-0 Display'></img>
                    <img src='/images/banner-6.jpeg' className='md:w-96 h-60 absolute top-96 mr-10 Width'></img>
                    <img src='/images/banner-7.jpeg' className='w-80 h-54 absolute top-80 right-0 Display'></img>
                    <img src='/images/icon/视频播放.png' className='w-20 md:absolute md:top-72 md:right-96 bttn mx-auto'></img>
                </div>
                {/* 右侧 */}
                <div className='lg:w-2/5 md:w-2/4 pl-4'>
                    <h2 className='font-bold text-4xl text-white'>Empowering VR to enhance people's lives<span className='span'>.</span></h2>
                    <p className='mt-6 text-gray-400'>Revolutionize Your Real Estate Sales with Interactive Virtual Tours. Studies show that listings with virtual tours receive 87% more views. Provide potential buyers with an engaging and immersive experience of your properties while saving time and resources. Let us show you how to use cutting-edge virtual tour technology to attract better-qualified leads and close more deals. Embrace the change and see the results for yourself.</p>
                    <h3 className='text-white mt-6 text-xl'>This will help you to quickly identify the best solution for your project：</h3>
                    <div>
                        <ul >
                            <li className='mt-6'>
                                <h3 className='text-xl text-white'>What is the space ？</h3>
                                <p className='text-sm mt-2 text-gray-400'>Is it home, a commercial office or wedding venue for example?</p>
                            </li>
                            <li className='mt-6'>
                                <h3 className='text-xl text-white'>Do you have an estimated Sq Ft of the space?</h3>
                                <p className='text-sm mt-2 text-gray-400'>If not do you have any photos of the space you can share so your provider can get a feel for the size and shape</p>
                            </li>
                            <li className='mt-6'>
                                <h3 className='text-xl text-white'>Is there any other important info？</h3>
                                <p className='text-sm mt-2 text-gray-400'>out of hours access, property condition or parking restrictions for example?</p>
                            </li>
                        </ul>
                    </div>
                    <h3 className='text-white mt-6 text-xl'>If you aren't sure about any of the above, don't worry. They're simply tips to help you get a quote quickly. We will be able to talk through your project and help you get an estimated quote.</h3>
                    <button className=' button mt-10 bg-gradient-to-r from-pink-500 to-blue-500 hover:text-black'><a>back a demo </a></button>
                </div>
            </div>
        </section>
    )
}
