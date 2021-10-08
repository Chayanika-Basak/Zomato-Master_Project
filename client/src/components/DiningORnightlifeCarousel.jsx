import React from 'react'
import {RiArrowRightSFill} from 'react-icons/ri'

const CarouselCard = (props) => {

    return (
        <>
            
            
            <div className="relative h-80 w-64 mx-4">

                <div className="absolute bg-gradient-to-t from-black pt-8 bottom-0 pb-1 w-full rounded-b-lg">
                    <h4 className="text-lg text-white pl-3">{props.title}</h4>
                    <h6 className="flex items-center gap-1 text-white pl-3">{props.subtitle}<RiArrowRightSFill className="text-2xl pt-1"/></h6>
                </div>

                <img
                src={props.image}
                alt={props.title}
                className="w-full h-full object-cover rounded-lg"
                />
            
            </div>
                
        </>
    )
}

export default CarouselCard
