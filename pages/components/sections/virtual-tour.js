import React from 'react'

export default function irtualTour() {
  return (
    <section className='bg-black relative'>
      <img src='/images/background/ormanents02.png' className='absolute z-0 -top-12 left-10 w-2/5'></img>
      <div className='max-w-screen-xl mx-auto flex flex-row py-20 relative z-10 px-4 Flex' >
        {/* 虚拟展示区 */}
        <div className='md:w-2/4'>
          <img src='/images/banner-3.png' className='bg-pink max-w-screen-md w-full h-full '></img>
        </div>
        {/* 文本区域 */}
        <div className='md:w-2/4 md:pl-10'>
          <h2 className='font-bold text-4xl text-white'>Boost your Real Estate sales with Virtual Tours<span className='span'>.</span></h2>
          <p className='mt-6 text-gray-400'>Excellent value Virtual tours are indeed an excellent tool for real estate sales, as they allow potential buyers to have a more immersive and interactive experience of a property.</p>
          <ul className='w-full'>
            <li className='mt-6 card flex flex-row '>
              <figure className='text-pink-500 w-16 h-16 mr-2 rounded-full bg-gray-400 opacity-20 my-auto'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
              </svg>
              </figure>
              <div className='w-10/12'>
                <h3 className='text-xl text-white'>Increased exposure</h3>
                <p className='text-sm mt-2 text-gray-400'>Virtual tours attract more views and engagement than static photos or videos, leading to increased exposure and visibility for your listings.</p>
              </div>
            </li>
            <li className='mt-6 card flex flex-row '>
              <figure className='text-blue-500 w-16 h-16 mr-2 rounded-full bg-gray-400 opacity-20 my-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </figure>
              <div className='w-10/12'>
                <h3 className='text-xl text-white'>Improved buyer experience</h3>
                <p className='text-sm mt-2 text-gray-400'>With virtual tours, buyers can explore the property at their own pace, from any location, and at any time. This improves their overall experience and can lead to increased interest in the property.</p>
              </div>
            </li>
            <li className='mt-6 card flex flex-row '>
              <figure className='text-pink-500 w-16 h-16 mr-2 rounded-full bg-gray-400 opacity-20 my-auto'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
              </svg>
              </figure>
              <div className='w-10/12'>
                <h3 className='text-xl text-white'>Time-saving</h3>
                <p className='text-sm mt-2 text-gray-400'>Virtual tours can help reduce the number of unnecessary in-person showings, saving time and resources for both the buyer and the real estate agent.</p>
              </div>
            </li>
            <li className='mt-6 card flex flex-row '>
              <figure className='text-blue-500 w-16 h-16 mr-2 rounded-full bg-gray-400 opacity-20 my-auto'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
              </svg>
              </figure>
              <div className='w-10/12'>
                <h3 className='text-xl text-white'>Competitive advantage</h3>
                <p className='text-sm mt-2 text-gray-400'>With virtual tours becoming more common in the real estate industry, offering this technology can give you a competitive advantage over other agents and agencies.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section >
  )
}
