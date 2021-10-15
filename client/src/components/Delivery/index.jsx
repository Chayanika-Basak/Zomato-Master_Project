import React,{useState, useEffect} from 'react'
import { useSelector } from "react-redux";

import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

//icons
import {GiSettingsKnobs} from 'react-icons/gi'
import {BsChevronDown, BsArrowDownUp} from 'react-icons/bs'



const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: [
                "https://b.zmtcdn.com/data/pictures/6/19683396/d642b4ea70014ed807210ace2920af60_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Obati by Etsu",
            cuisine: ["Burgers", "Sandwiches", "Italian"],
            averageCost: 400,
            isPro: 20,
            isOff: 80,
            durationOfDelivery: "42 min",
            restaurantReviewValue: 4.2             
        },
        {
            _id: "123457",
            photos: [
                "https://b.zmtcdn.com/data/pictures/5/19159995/97a39b86c6a840722c5a4138d44eed69_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Kuremals Kulfi",
            cuisine: ["Desserts", "Ice Cream"],
            averageCost: 100,
            isPro: false,
            isOff: 40,
            durationOfDelivery: "28 min",
            restaurantReviewValue: "4.0"             
        },
        {
            _id: "123458",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/1/171/0094c2b5485c4c2f52c931306442269b_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "McDonald's",
            cuisine: ["Burgers", "Fast Food", "Dessert"],
            averageCost: 100,
            isPro: false,
            isOff: 30,
            durationOfDelivery: "36 min",
            restaurantReviewValue: 4.3             
        },
        {
            _id: "123459",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/3/18886903/449a91cabfa87a9a7a9a67124054482b_o2_featured_v2.png?output-format=webp"
            ],
            name: "Oriental mom",
            cuisine: ["Asian", "Chinese"],
            averageCost: 100,
            isPro: 15,
            isOff: 60,
            durationOfDelivery: "43 min",
            restaurantReviewValue: 4.1             
        },
        {
            _id: "123460",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/3/143/c9996dd70c88230268cb00d20a92b7cf_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Domino's Pizza",
            cuisine: ["Pizza", "Fast Food", "Dessert"],
            averageCost: 100,
            isPro: false,
            isOff: 20,
            durationOfDelivery: "30 min",
            restaurantReviewValue: "4.0"             
        },
        {
            _id: "123461",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/0/550/a915df22032cd899f9cab92e1bb57c8c_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Haldiram's",
            cuisine: ["North Indian", "Beverages"],
            averageCost: 100,
            isPro: false,
            isOff: false,
            durationOfDelivery: "28 min",
            restaurantReviewValue: 4.2             
        }
    ]);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.restaurants
      );
    
      useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
      }, [reduxState.restaurants]);
    
    return(
        <>
            <div className="hidden lg:flex items-center pl-20 gap-4 border-t border-gray-300 py-6">

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
            <div>
                <div className="lg:bg-gray-100">
                    <h1 className="lg:bg-gray-100 text-xl lg:text-3xl pl-4 font-medium lg:pl-20 lg:pt-12">
                        Inspiration for your first order
                    </h1>
                    <div className="lg:mx-16">
                        <DeliveryCarousal/>
                    </div>
                </div>
                <h1 className="text-xl lg:text-3xl pl-4 font-medium lg:pl-20 pt-8 lg:pt-12">
                    Top Brands for you
                </h1>
                <div className="lg:mx-16 mx-10">
                    <Brand/>
                </div>
                <h1 className="text-xl lg:text-3xl pl-4 font-medium lg:pl-20 pt-8 lg:pt-12">
                    Best Food in Delhi NCR
                </h1>
                <div className="flex flex-wrap justify-evenly">
                    {
                        restaurantList.map((restaurant) => (
                            <RestaurantCard
                                {...restaurant}
                                key={restaurant._id}
                                whereIsthisres="asf"
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Delivery;