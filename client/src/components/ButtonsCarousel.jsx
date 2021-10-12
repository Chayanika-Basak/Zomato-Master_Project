import React from 'react'
import Slider from "react-slick";

//icons
import {GiSettingsKnobs} from 'react-icons/gi'
import {BsChevronDown, BsArrowDownUp} from 'react-icons/bs'

const ButtonsCarousel = () => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
    };

    return (
        <>
            <div className="md:hidden">
            <Slider {...settings}>
            <button className="text-sm rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 pl-2 py-1">
                    <div className="flex items-center gap-2">
                        <GiSettingsKnobs/> Filters
                    </div>
                </button>

                <button className="text-sm rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center">
                        Pro Offers <BsChevronDown/>
                    </div>
                </button>

                <button className="text-sm rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center gap-2">
                        <BsArrowDownUp/> Distance
                    </div>
                </button>

                <button className="text-sm rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Online Bookings</button>
                <button className="text-sm rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Outdoor Seating</button>
                <button className="text-sm rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Rating: 4.0+</button>

                <button className="text-sm rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center">
                        Cuisines <BsChevronDown/>
                    </div>
                </button>

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Cafes</button>
                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Open Now</button>
      
            </Slider>
            </div>
        </>
    )
}

export default ButtonsCarousel
