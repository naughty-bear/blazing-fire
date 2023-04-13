import React from 'react'
import 'animate.css'
export default function footer() {
    return (
        <div className='bg-black relative'>

            <img src='/images/background/ormanents03.png' className='absolute  bottom-0 z-0 opacity-50'></img>

            {/* 邮箱区块 */}
            <div className='max-w-screen-xl mx-auto flex flex-row py-40 lg:w-3/5 md:4/5 relative z-10 px-4 Flex animate__animated animate__slideInUp'>
                {/* 文本区 */}
                <div className='md:w-1/2'>
                    <h1 className='text-white text-4xl font-bold bttn'>Contact Us</h1>
                    <h3 className='text-white text-2xl mt-12'>Who we are</h3>
                    <p className='text-gray-400 mt-4'>Our diverse founding team brings a range of skills to the table, including extensive knowledge of VR and immersive technologies, AI, machine learning. With a focus on understanding Chinese culture and marketing models, as well as Western markets and customer acquisition, we bring a global perspective to our work. Our team is comprised of a Master's graduate from University College London and a PhD from Oxford University. Our expertise in virtual reality and immersive technologies ensures innovative and effective solutions for our clients.</p>
                    <p className='text-gray-400 mt-8'>Whether you're looking to create a virtual tour, develop a VR application, or explore the possibilities of 360-degree video, our team is here to help. Contact us today to learn more about how we can help bring your vision to life.</p>
                </div>
                {/* 邮件区 */}
                <div className='md:w-1/2 md:pl-10 Margin-t'>
                    <ul>
                        <li className='flex flex-col mb-8'>
                            <span className='text-gray-400'>Your Name *</span>
                            <input className='h-10 bg-black border border-gray-400 pl-4 font-extralight text-white ipt' placeholder='Your Name'/>
                        </li>
                        <li className='flex flex-col mb-8'>
                            <span className='text-gray-400'>Your Email *</span>
                            <input className='h-10 bg-black border border-gray-400 pl-4 font-extralight text-white ipt' placeholder='Your Email'/>
                        </li>
                        <li className='flex flex-col mb-8'>
                            <span className='text-gray-400'>Subject *</span>
                            <input className='h-10 bg-black border border-gray-400 pl-4 font-extralight text-white ipt' placeholder='Issue Here'/>
                        </li>
                        <li className='flex flex-col mb-10'>
                            <span className='text-gray-400'>Feel free to ask a question or simply leave a comment or add text *</span>
                            <textarea className='h-60 bg-black border border-gray-400 pl-4 font-extralight text-white ipt' placeholder='Add text' ></textarea>
                        </li>
                    </ul>
                    <button className=' button bg-gradient-to-r from-pink-500 to-blue-500 hover:text-black'>Send Message</button>
                </div>
            </div>
            {/* 底部模块 */}
            <footer className="text-base-content max-w-screen-xl mx-auto relative z-10 px-4 animate__animated animate__slideInUp">
                <div className='flex flex-row mb-20 Flex' >
                    <div className='md:w-7/12 flex flex-row  Flex'>
                        <img src='/images/logo.png' className='w-60 h-12'></img>
                        <div className=' md:ml-14 card flex flex-col'>
                                <span className='text-white'>Email Us</span>
                                <span className='text-pink-600 hover:text-indigo-700 bttn'>info@blazingfire.co.uk</span>
                        </div>
                    </div>
                    <div className='md:w-5/12  Margin-t'>
                        <h2 className='text-white text-lg'>Newsletter</h2>
                        <p className='text-gray-400 text-xs mt-4'>71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, UNITED KINGDOM</p>
                        {/* 地图插件 */}
                        <div className="elementor-custom-embed mt-10">
                            <iframe loading="lazy" className='w-full h-72'
                                src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
                                title="London Eye, London, United Kingdom"
                                aria-label="London Eye, London, United Kingdom"></iframe>
                        </div>
                    </div>
                </div>
            </footer>
            <p className='text-xs max-w-screen-xl mx-auto text-center pb-4'> ©zenAI, All rights reserved, Product by wpaper agency</p>
        </div>
    )
}
