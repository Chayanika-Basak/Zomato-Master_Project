import React from 'react'

//icons
import {FaUserAlt} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import {RiSearchLine} from 'react-icons/ri'

const MobileTabletNavbar = () => {
return(
    <>
    <div className="flex w-screen items-center justify-between shadow-md p-2 lg:hidden">
        <div className="w-24">
            <img 
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
            />
        </div>

        <div className="flex items-center">
            <div className="w-20">
                <button className="h-full bg-coral-400 rounded-full text-white font-semibold px-2 py-2 text-xs text-medium">
                    Use App
                </button>
            </div>

            <div className="rounded-full border-2 border-gray-200 p-2">
                <FaUserAlt className="text-coral-400 text-lg"/>
            </div>

        </div>
    </div>
    </>
)
}

const LaptopNavbar = () => {
    return(
        <>
            <div className="hidden lg:flex w-full items-center justify-evenly">
                <div className="w-32 ml-10">
                    <img 
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full"
                    />
                </div>
                <div className="flex items-center w-3/5 rounded-lg shadow-md pl-2 border border-gray-200 gap-2">
                    <span className="text-2xl text-coral-300">
                    <HiLocationMarker/>
                    </span>
                    <div className="w-1/2 text-sm">
                    <input type="text" placeholder="National Capital Region (NCR)" className="w-full"/>
                    </div>
                    <IoMdArrowDropdown className="text-5xl text-gray-600 pr-2 border-r-2 border-gray-300"/>
                    <RiSearchLine className="text-4xl text-gray-600 ml-2"/>
                    <div className="w-full px-2">
                    <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="w-full"/>
                    </div>
                </div>

                <div className="flex items-center md:gap-3">
                    <button className="text-lg px-4 text-gray-500 hover:text-gray-700">Log In</button>
                    <button className="text-lg px-4 text-gray-500 hover:text-gray-700">Sign Up</button>
                </div>
            </div>
        </>
    );
}


const Navbar = () => {
    return(
        <>
            <nav className="px-4 py-3 bg-white flex items-center w-full">
                
                <MobileTabletNavbar />
                
                <LaptopNavbar/>
            </nav>
        </>
    );
}

export default Navbar;