import React from 'react'
import DeliveryCarousal from './DeliveryCarousal';

//icons
import {GiSettingsKnobs} from 'react-icons/gi'
import {BsChevronDown, BsArrowDownUp} from 'react-icons/bs'

const Delivery = () => {
    return(
        <>
            <div className="hidden lg:flex items-center pl-20 gap-4 border-t border-gray-300 py-6 w-screen">

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center gap-2">
                        <GiSettingsKnobs/> Filters
                    </div>
                </button>

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center gap-2">
                        <BsArrowDownUp/> Delivery Time
                    </div>
                </button>

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Pure Veg</button>
                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Rating: 4.0+</button>
                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Great Offers</button>

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center">
                        Cuisines <BsChevronDown/>
                    </div>
                </button>

            </div>

            <h1 className="lg:bg-gray-100 text-xl lg:text-3xl pl-4 font-medium lg:pl-20 lg:pt-12">
                Inspiration for your first order
            </h1>
            
            <DeliveryCarousal/>
        </>
    )
}

export default Delivery;