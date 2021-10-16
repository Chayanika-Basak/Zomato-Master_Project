import React, {useState} from 'react'
import DiningCarousal from './DiningCarousel'
import { Link, useParams } from 'react-router-dom'
import classnames from 'classnames'
import ButtonsCarousel from '../ButtonsCarousel'

//icons
import {GiSettingsKnobs} from 'react-icons/gi'
import {BsChevronDown, BsArrowDownUp} from 'react-icons/bs'
import {RiArrowRightSFill} from 'react-icons/ri'
import RestaurantCard from '../RestaurantCard'



const Dining = () => {

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

    const [allTypes, setAllTypes] = useState(
        [
            {
                id: `dining`,
                name: "Dining Out"
            },
            { 
                id: `nightlife`,
                name: "Nightlife"
            },
            { 
                id: `nutrition`,
                name: "Nutrition"
            }
            
        ]
    )
    
    const {type} = useParams();

    return (
        <>
            <div className="lg:hidden flex items-center mt-2 md:mt-6 mb-8">
            {allTypes.map((items) => (
                    <Link to={`${items.id}`}>
                        <span className=
                            {
                                classnames("text-base md:text-xl ml-4 pb-2 font-medium text-gray-500 transition duration-700 ease-in-out", {
                                    "border-b-2 border-gray-900 text-coral-400" : type === items.id
                                })
                            }
                        >
                         {items.name}   
                        </span>
                    </Link> 
                ))}
            </div>
            <div className="mx-4">
                <ButtonsCarousel/>
            </div>
        <div className="bg-gray-100 border-t border-t-gray-200 pb-12">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl mt-6 lg:ml-20 ml-6">Collections</h1>
                <a href="/#" className="flex md:hidden items-center mt-6 text-coral-300 text-md font-light hover:text-coral-500">
                    All collections in Delhi NCR  <RiArrowRightSFill className="text-2xl pt-1"/>
                </a>
            </div>
            <div className="flex items-center justify-between lg:mr-16 mr-6 md:mt-8 mb-4">
                <h2 className="text-sm md:text-lg mt-2 text-gray-600 font-light lg:ml-20 ml-6">
                    Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
                </h2>
                <a href="/#" className="hidden md:flex items-center text-coral-300 text-md font-light hover:text-coral-500">All collections in Delhi NCR  <RiArrowRightSFill className="text-2xl pt-1"/></a>
            </div>
            <div className="lg:mx-16 md:mx-12 mr-6">
                <DiningCarousal/>
            </div>
        </div>
        <div className="hidden md:flex flex-wrap lg:flex items-center pl-12 lg:pl-20 gap-4 py-6 my-6">

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center gap-2">
                        <GiSettingsKnobs/> Filters
                    </div>
                </button>

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center">
                        Pro Offers <BsChevronDown/>
                    </div>
                </button>

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center gap-2">
                        <BsArrowDownUp/> Distance
                    </div>
                </button>

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Online Bookings</button>
                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Outdoor Seating</button>
                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Rating: 4.0+</button>

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">
                    <div className="flex items-center">
                        Cuisines <BsChevronDown/>
                    </div>
                </button>

                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Cafes</button>
                <button className="rounded-md hover:bg-gray-100 border text-gray-400 border-gray-400 px-2 py-1">Open Now</button>

            </div>
        <h1 className="text-2xl ml-10 mt-6 md:text-3xl md:ml-20">Dine-Out Restaurants in Safdarjung</h1>
        <div className="flex flex-wrap justify-evenly">
            {
                restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id}/>
                ))
            }
        </div>
        </>
    )
}

export default Dining
