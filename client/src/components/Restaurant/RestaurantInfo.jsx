import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import classnames from 'classnames'

const RestaurantInfo = (props) => {
  return (
    <>
      <div className="my-4">
        <div className="flex flex-col flex-col-reverse md:flex-row md:items-center justify-between gap-3">
          <h1 className="text-xl md:text-4xl">
            {props.name}
          </h1>
          <div className="flex items-center gap-6 text-xs md:text-base">
            <div className="flex items-center gap-2">
              <span className=
                {
                    classnames("flex rounded items-center gap-1 text-white font-semibold text-lg bg-green-700 px-1", {
                        "bg-gray-400" : !props.restaurantRating
                    })
                }
              >
                {props.restaurantRating}
                <TiStarFullOutline />
              </span>
              <span>
                <strong>0</strong>
                <p className="border-b-2 border-gray-300 border-dashed">Dining reviews</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex rounded items-center gap-1 text-white font-semibold text-lg bg-green-700 px-1">
                {props.deliveryRating}
                <TiStarFullOutline />
              </span>
              <span>
                <strong>32K</strong>
                <p className="border-b-2 border-gray-300 border-dashed ">Delivery reviews</p>
              </span>
            </div>
          </div>
        </div>
        <div className="text-base md:text-lg text-gray-600">
          <h3>{props.cuisine}</h3>
          <h3 className="text-gray-400">{props.address}</h3>
          <h3>
            <span className="text-yellow-500">Open Now</span> - 11am - 8pm
          </h3>
        </div>
      </div>
    </>
  );
};

export default RestaurantInfo;