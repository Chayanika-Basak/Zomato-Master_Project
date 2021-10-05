import React from 'react'
import {BsHandbag} from 'react-icons/bs'
import {IoFootstepsOutline} from 'react-icons/io5'

const MobileTabs = () => {
    return(
        <>
            <div className="flex lg:hidden items-center text-gray-600 md:justify-evenly bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full">
                
                <div className="flex flex-col w-1/2 items-center border-r-2 border-gray-200">
                    <BsHandbag className="text-3xl"/>
                    <h5 className="text-sm">
                        Delivery
                    </h5>
                </div>

                <div className="flex flex-col w-1/2 items-center">
                    <IoFootstepsOutline className="text-3xl"/>
                    <h5 className="text-sm">
                        Dining out
                    </h5>
                </div>
            </div>
        </>
    );
}

const LaptopTabs = () => {
    return(
        <>
            <div className="container mx-auto p-4 hidden lg:flex items-center gap-8 mt-4">
                <div className="flex items-center gap-2 ml-20">
                    <div className="w-16 h-16 bg-gray-100 rounded-full">
                        <img 
                        src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp"
                        alt="Delivery"
                        className="w-full h-full p-3"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-500">Delivery</h2>
                </div>
                <div className="flex items-center gap-2 ml-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full">
                        <img 
                        src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                        alt="Dining Out"
                        className="w-full h-full p-3"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-500">Dining Out</h2>
                </div>
                <div className="flex items-center gap-2 ml-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full">
                        <img 
                        src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                        alt="Nightlife"
                        className="w-full h-full p-3"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-500">Nightlife</h2>
                </div>
                <div className="flex items-center gap-2 ml-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full">
                        <img 
                        src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
                        alt="Nutrition"
                        className="w-full h-full p-3"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-500">Nutrition</h2>
                </div>
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