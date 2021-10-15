import React, {useState} from 'react'
import gravatar from "gravatar";
import { useSelector } from "react-redux";

//icons
import {FaUserAlt} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import {RiSearchLine} from 'react-icons/ri'
import {AiOutlineArrowLeft} from 'react-icons/ai'

// components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

const MobileTabletNavbar = ({ SignIn, SignUp }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const reduxState = useSelector((global) => global.user.user)

    return(
    <>
    <div className="flex w-screen items-center justify-between shadow-md p-2 lg:hidden">
        <div className="flex items-center gap-3">
            <AiOutlineArrowLeft className="text-2xl"/>
            <div className=" w-24">
                <img 
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
                />
            </div>
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
            Use App
            </button>
            {reduxState?.user?.fullname ? (
            <>
                {" "}
                <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border p-2 border-gray-300 text-zomato-400 w-20 h-20 rounded-full"
                >
                <img
                    src={gravatar.url(reduxState?.user?.email)}
                    alt={reduxState?.user?.email}
                    className="w-full h-full rounded-full object-cover"
                />
                </div>
                {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                    <button>Sign Out</button>
                </div>
                )}
            </>
            ) : (
            <>
                <span
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border p-2 border-gray-300 text-zomato-400 rounded-full"
                >
                <FaUserAlt />
                </span>
                {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                    <button onClick={SignIn}>Sign In</button>
                    <button onClick={SignUp}>Sign Up</button>
                </div>
                )}
            </>
            )}
      </div>

    </div>
    </>
)
}

const LaptopNavbar = ({ SignIn, SignUp }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const reduxState = useSelector((global) => global.user.user);

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

                {reduxState?.user?.fullname ? (
                    <div className="relative w-20">
                    {" "}
                    <div
                        onClick={() => setIsDropDownOpen((prev) => !prev)}
                        className="border p-2 border-gray-300 text-zomato-400 w-full h-20 rounded-full"
                    >
                        <img
                        src={gravatar.url(reduxState?.user?.email)}
                        alt={reduxState?.user?.email}
                        className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    {isDropDownOpen && (
                        <div className="absolute shadow-lg py-3  -right-4 w-full bg-white z-30 flex flex-col gap-2">
                        <button>Sign Out</button>
                        </div>
                    )}
                    </div>
                ) : (
                    <div className="ml-28 flex gap-4 ">
                    <button
                        onClick={SignIn}
                        className="text-gray-500 text-xl hover:text-gray-800"
                    >
                        Login
                    </button>
                    <button
                        onClick={SignUp}
                        className="text-gray-500 text-xl hover:text-gray-800"
                    >
                        Signup
                    </button>
                    </div>
                )}
            </div>
        </>
    );
}


const RestaurantNavbar = () => {
    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const openSignInmodal = () => setOpenSignin(true);
    const openSignUpmodal = () => setOpenSignup(true);
    return (
        <>
        {" "}
        <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
        <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
        <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
            <MobileTabletNavbar SignIn={openSignInmodal} SignUp={openSignUpmodal} />
            <LaptopNavbar SignIn={openSignInmodal} SignUp={openSignUpmodal} />
        </nav>
        </>
    );
}

export default RestaurantNavbar;