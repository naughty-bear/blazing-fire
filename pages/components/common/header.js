import React from 'react'
export default function header() {
    return (
<<<<<<< HEAD
        <header className="navbar py-6 px-10">
=======
        <header className="navbar py-5  bg-black max-w-screen-xl mx-auto">
>>>>>>> 1fd68f0698d3555b342248312b1b399d6e60b61c
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><a>Home</a></li>
                        <li ><a>Service</a></li>
                        <li><a>Info</a></li>
                        <li><a>Why Us</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
<<<<<<< HEAD
                <a className="btn bg-transparent w-40 h-10 border-transparent"><img src='/images/logo.png' alt='logo'/></a>
=======
                <a className="bg-transparent w-40 h-10 border-transparent bttn"><img src='/images/logo.png' alt='logo'/></a>
>>>>>>> 1fd68f0698d3555b342248312b1b399d6e60b61c
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-500">
                    <li className='home-selected'><a>Home</a></li>
                    <li className='home-select'><a>Service</a></li>
                    <li className='home-select'><a>Info</a></li>
                    <li className='home-select'><a>Why Us</a></li>
                    <li className='home-select'><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
<<<<<<< HEAD
                <a className="btn normal-case border-transparent w-44 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:text-black ... " >Back a demo</a>
=======
                <a className="normal-case border-transparent w-auto h-auto py-4 px-8 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:text-black bttn" >Back a demo</a>
>>>>>>> 1fd68f0698d3555b342248312b1b399d6e60b61c
            </div>
        </header>
    )
}