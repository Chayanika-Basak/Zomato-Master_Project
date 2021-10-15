import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import {AiFillStar} from 'react-icons/ai'
import { getImage } from "../Redux/Reducer/Image/Image.action";

const RestaurantCard = (props) => {

    const [image, setImage] = useState({
        images: [],
      });
      const dispatch = useDispatch();
    
      useEffect(() => {
          if(props.photos)
            props.photos &&
            dispatch(getImage(props.photos)).then((data) =>
            setImage(data.payload.image)
          );
      }, [props.photos]);
    
    return (
        <>
        <Link to={`/restaurant/${props._id}`} className="w-full md:w-1/4 lg:w-1/4 m-1 p-1 my-6">
            <div className="bg-white transition duration-400 ease-in-out rounded-xl hover:border-gray-300 hover:shadow-xl">
                <div className="w-full h-52 lg:h-56 relative">
                    <div className="absolute w-full flex items-end justify-between bottom-4">
                        <div className="flex flex-col gap-2 items-start">
                            {props.isPro && (
                                <span className="bg-coral-400 rounded text-xs text-white px-1 ml-1">
                                    Pro extra {`${props.isPro}`}% off
                                </span>
                            )}
                            {props.isOff && (
                                <span className="bg-blue-600 rounded text-xs text-white px-1 ml-1" >
                                    {`${props.isOff}`} % off
                                </span>
                            )}
                            
                        </div>
                        <span className="bg-white text-xs bg-opacity-75 rounded mr-1 px-1">
                            {props.durationOfDelivery}
                        </span>
                    </div>
                    <img src={props.photos.length && props.photos[0]}
                    alt="food"
                    className="w-full h-full rounded-2xl"
                    />
                </div>
                    <div className="flex items-center justify-between my-2">
                        <h4 className="text-xl font-medium">{props.name}</h4>
                        <span className="bg-green-700 text-white flex items-center rounded-lg text-sm px-1 gap-1">
                        {props.restaurantReviewValue} <AiFillStar/></span>
                    </div>
                    <div className="flex itesm-center justify-between my-2 text-gray-500">
                        <h4 className="text-sm">{props.cuisine.join(", ")}</h4>
                        <h4 className="text-sm">₹ {props.averageCost} for one</h4>
                    </div>
                    <div className="flex itesm-center justify-between p-2 text-gray-500 border-t border-t-gray-300">
                        <h4 className="text-xs">Follows all food safety measures to ensure your food is safe</h4>
                    </div>
                
            </div>
            </Link>
        </>
    )
}

export default RestaurantCard
