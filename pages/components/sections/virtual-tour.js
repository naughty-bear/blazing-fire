import React from 'react'

export default function irtualTour() {
  return (
    <section>
      <div className='max-w-screen-xl mx-auto flex flex-row pb-20' >
        {/* 虚拟展示区 */}
        <div className='w-3/5'>
          <img src='/images/banner-3.png' className='bg-pink max-w-screen-md max-h-96 '></img>
        </div>
        {/* 文本区域 */}
        <div className='w-2/5 pl-10'>
          <h2 className='font-bold text-4xl text-white'>Boost your Real Estate sales with Virtual Tours<span className='span'>.</span></h2>
          <p className='mt-6 text-gray-400'>Excellent value Virtual tours are indeed an excellent tool for real estate sales, as they allow potential buyers to have a more immersive and interactive experience of a property.</p>
          <div>
            <ul>
              <li className='mt-6'>
                <h3 className='text-xl text-white'>Increased exposure</h3>
                <p className='text-sm mt-2 text-gray-400'>Virtual tours attract more views and engagement than static photos or videos, leading to increased exposure and visibility for your listings.</p>
              </li>
              <li className='mt-6'>
                <h3 className='text-xl text-white'>Improved buyer experience</h3>
                <p className='text-sm mt-2 text-gray-400'>With virtual tours, buyers can explore the property at their own pace, from any location, and at any time. This improves their overall experience and can lead to increased interest in the property.</p>
              </li>
              <li className='mt-6'>
                <h3 className='text-xl text-white'>Time-saving</h3>
                <p className='text-sm mt-2 text-gray-400'>Virtual tours can help reduce the number of unnecessary in-person showings, saving time and resources for both the buyer and the real estate agent.</p>
              </li>
              <li className='mt-6'>
                <h3 className='text-xl text-white'>Competitive advantage</h3>
                <p className='text-sm mt-2 text-gray-400'>With virtual tours becoming more common in the real estate industry, offering this technology can give you a competitive advantage over other agents and agencies.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
