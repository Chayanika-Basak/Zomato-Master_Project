import React, {useState} from 'react'
import {BsHandbag} from 'react-icons/bs'
import {IoFootstepsOutline} from 'react-icons/io5'
import { useParams, Link } from 'react-router-dom'
import classnames from 'classnames'

const MobileTabs = () => {
    const [allTypes, setAllTypes] = useState(
        [
            { 
                id: `delivery`,
                icon: <BsHandbag/>,
                name: "Delivery"
            },
            {
                id: `dining`,
                icon: <IoFootstepsOutline/>,
                name: "Dining Out"
            }
        ]
    )

    const {type} = useParams();

    return(
        <>
            <div className="flex lg:hidden items-center md:justify-evenly bg-white py-2 fixed bottom-0 z-10 w-full">
                {allTypes.map((items) => (
                    
                    <Link to={`/${items.id}`} className="w-full">
                        <div className=
                            {
                                classnames("flex flex-col w-full items-center pt-2 shadow-xl transition duration-700 ease-in-out", {
                                    "border-t-2 border-coral-400" : type === items.id
                                })
                            }
                        >
                            <div className=
                            {
                                classnames("text-3xl text-gray-500", {
                                    "text-gray-900" : type === items.id
                                })
                            }
                            >
                                {items.icon}
                            </div>
                            <h5 className=
                            {
                                classnames("text-sm text-gray-500", {
                                    "text-gray-900" : type === items.id
                                })
                            }
                            >
                                {items.name}
                            </h5>
                        </div>
                    </Link>
                ))}
                
            </div>
        </>
    );
}

const LaptopTabs = () => {

    const [allTypes, setAllTypes] = useState(
        [
            { 
                id: `delivery`,
                imageDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp",
                imageActive: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
                activeColor: "yellow",
                name: "Delivery"
            },
            {
                id: `dining`,
                imageDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
                imageActive: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
                activeColor: "blue",
                name: "Dining Out"
            },
            {
                id: `nightlife`,
                imageDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
                imageActive: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
                activeColor: "blue",
                name: "Nightlife"
            },
            {
                id: `nutrition`,
                imageDefault: "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
                imageActive: "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
                activeColor: "yellow",
                name: "Nutrition"
            }
        ]
    )

    const {type} = useParams();

    return(
        <>
            <div className="pt-4 ml-20 hidden lg:flex items-center gap-8 mt-4">
                {allTypes.map((items) => (
                    <Link to={`${items.id}`}>
                        <div className=
                            {
                                classnames("flex items-center gap-2 ml-6 pb-2 transition duration-700 ease-in-out", {
                                    "border-b-2 border-coral-400" : type === items.id
                                })
                            }
                        >
                            <div className=
                                {
                                    classnames("w-16 h-16 bg-gray-100 rounded-full", {
                                        [`bg-${items.activeColor}-100`] : type === items.id
                                    })
                                }
                            >

                                <img 
                                src={type === items.id ? items.imageActive : items.imageDefault}
                                alt={items.name}
                                className="w-full h-full p-3"
                                />
                            </div>
                            <h2 className=
                            {
                                classnames("text-xl font-semibold text-gray-500", {
                                    "text-coral-400" : type === items.id
                                })
                            }>
                                    {items.name}
                            </h2>
                        </div>
                    </Link> 
                ))}
                               
            </div>
        </>
    );
}

const FoodTab = () => 
{
    return(
        <>
            <div>
                <MobileTabs/>
                <LaptopTabs/>
            </div>
        </>
    );
}

export default FoodTab;