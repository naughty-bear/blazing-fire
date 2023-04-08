import React from 'react'
import 'animate.css'
export default function enjoy() {
    return (
        <section className='bg-gray-900 relative'>
        <img src='/images/background/ormanents03.png' className='absolute z-0 top-20 opacity-50'></img>
            <div className='pt-10 max-w-screen-xl mx-auto pb-20 relative z-10 px-4'>
                {/* 文本区域 */}
                <div className='text-center lg:px-60 md:px-32 animate__animated  animate__slideInUp'>
                    <h2 className='font-bold text-4xl text-white '>Enjoy the limitless entertainment possibilities with VR<span className='span'>.</span></h2>
                    <p className='mt-5 text-gray-400'>Our expertise in virtual technology enables us to create immersive experiences relevant to various different sectors, such as real estate, tourism, education, and entertainment</p>
                </div>
                {/* 卡片区域 */}
                <div className='flex flex-row pt-20 md:flex-wrap text-white Flex Width'>
                    <div className="card   shadow-xl bg-gradient-to-b from-blue-600 to-pink-500 md:w-1/4 h-60">
                        <figure className="px-10 pt-10">
                            <img src="/images/elements01.png" alt="Shoes" className="rounded-xl h-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Real Estate</h2>
                        </div>
                    </div>
                    <div className="card  shadow-xl  md:w-1/4 h-60 bg-gray-800 opacity-60">
                        <figure className="px-10 pt-10">
                            <img src="/images/elements02.png" alt="Shoes" className="rounded-xl h-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Commercial Properties</h2>
                        </div>
                    </div>
                    <div className="card  shadow-xl bg-gradient-to-b from-blue-600 to-pink-500 md:w-1/4 h-60">
                        <figure className="px-10 pt-10">
                            <img src="/images/elements01.png" alt="Shoes" className="rounded-xl h-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Park,beach and Wetlannd</h2>
                        </div>
                    </div>
                    <div className="card  shadow-xl md:w-1/4 h-60 bg-gray-800 opacity-60">
                        <figure className="px-10 pt-10">
                            <img src="/images/elements02.png" alt="Shoes" className="rounded-xl h-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Hotel & Event Space</h2>
                        </div>
                    </div>
                    
                    <div className="card  shadow-xl md:w-1/4 h-60 bg-gray-800 opacity-60">
                        <figure className="px-10 pt-10">
                            <img src="/images/elements02.png" alt="Shoes" className="rounded-xl h-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Museums & Galleries</h2>
                        </div>
                    </div>
                    <div className="card  shadow-xl bg-gradient-to-b from-blue-600 to-pink-500 md:w-1/4 h-60">
                        <figure className="px-10 pt-10">
                            <img src="/images/elements01.png" alt="Shoes" className="rounded-xl h-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Schools, Colleges and Universities</h2>
                        </div>
                    </div>
                    <div className="card  shadow-xl md:w-1/4 h-60 bg-gray-800 opacity-60">
                        <figure className="px-10 pt-10">
                            <img src="/images/elements02.png" alt="Shoes" className="rounded-xl h-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Gyms, Spas & Health Clubs</h2>
                        </div>
                    </div>
                    <div className="card  shadow-xl bg-gradient-to-b from-blue-600 to-pink-500 md:w-1/4 h-60">
                        <figure className="px-10 pt-10">
                            <img src="/images/elements01.png" alt="Shoes" className="rounded-xl h-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Restaurants, Bars & Hospitality</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
