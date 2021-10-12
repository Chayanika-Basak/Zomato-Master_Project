import React from 'react'
import {MdOutlineAddAPhoto} from 'react-icons/md'

const ImageGrid = (props) => {
    return (
        <>
            <div className="container mx-auto px-4 lg:px-20">
                <div className="w-full h-60 md:hidden">
                    <img
                        src={props.images[0]}
                        alt="restaurant image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="hidden w-11/12 h-96 md:flex gap-1">
                    <div className="w-2/3 h-full overflow-hidden">
                        <img
                            src={props.images[0]}
                            alt="restaurant image"
                            className="w-full h-full rounded-lg transform transition duration-700 hover:scale-110"
                        />
                    </div>
                    <div className="w-40 lg:w-1/5 h-full flex flex-col gap-1 overflow-hidden">
                        
                            <img
                                src={props.images[1]}
                                alt="restaurant image"
                                className="w-full h-full rounded-lg transform transition duration-700 hover:scale-110"
                            />
                            <img
                                src={props.images[2]}
                                alt="restaurant image"
                                className="w-full h-full rounded-lg transform transition duration-700 hover:scale-110"
                            />
                    </div>

                    <div className="w-40 lg:w-1/5 h-full flex flex-col gap-1 overflow-hidden">
                            <div className="w-full h-full relative">
                                <img
                                    src={props.images[3]}
                                    alt="restaurant image"
                                    className="w-full h-full rounded-lg transform transition duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg" />
                                <h4 className="absolute font-semibold text-base text-white text-center inset-y-1/2 z-20 w-full h-full">View Gallery</h4>
                            </div>
                            
                            <div className="w-full h-full relative">
                                <img
                                    src={props.images[4]}
                                    alt="restaurant image"
                                    className="w-full h-full rounded-lg transform transition duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg" />
                                <div className="absolute flex flex-col items-center font-semibold text-base text-white text-center inset-y-1/3 z-20 w-full h-full">
                                    <MdOutlineAddAPhoto className="text-4xxl bg-black bg-opacity-40 rounded-full p-2"/>
                                    <h4>Add Photos</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ImageGrid
