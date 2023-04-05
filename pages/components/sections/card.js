import React from 'react'


export default function Cord() {
    return (
        <div className='bg-black'>
            <ul className='flex mx-auto flex-wrap flex-row py-20 max-w-screen-xl'>
                <li>
                    <div className="card w-80 h-96 text-white text-center shadow-xl pt-20 bg-gradient-to-b from-pink-600 to-blue-500 ">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title mx-auto">360 Photography/Video</h2>
                            <p>Precision 360 images/video shot at 4-8K as standard. A rig for every occasion.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card w-80 h-96 text-white text-center shadow-xl pt-10 bg-gray-800 opacity-60">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title mx-auto">360 Virtual Tour!</h2>
                            <p>A virtual reality experience that allows users to explore a location or environment in a 360-degree panoramic view. Users can navigate through the virtual tour by clicking on interactive hotspots or using their cursor to move around the environment.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card w-80 h-96 text-white text-center  shadow-xl bg-gradient-to-b from-pink-600 to-blue-500 pt-20">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title mx-auto ">Immersive & Interactive Experience</h2>
                            <p>Using the most advanced immersive technologies including web or app-based VR solutions for headsets or projection domes, we create high-definition and walkable immersive visualisations for users.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card w-80 h-96 text-white text-center shadow-xl pt-10 bg-gray-800 opacity-60">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Metaverse Development!</h2>
                            <p>Open new dimensions in the future metaverse. Build interoperable & immersive virtual environments using a combination of technologies. SuchAR/VR, blockchain, AI ,3D modelling and NFTs.</p>

                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
