import React, {useState} from "react";
import { Link, useParams } from 'react-router-dom'
import classnames from 'classnames'

// components
import NutritionCard from "./NutritionCard";
import NutritionCarousal from "./NutritionCarousel";
import NutritionHeroCarousal from "./NutritionHeroCarousel";

const Nutrition = () => {

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
    <div>
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
      <div className="px-8 lg:pl-28 lg:pr-20 pt-6 lg:pt-12 lg:border-t border-t-gray-100 justify-center">
          <NutritionHeroCarousal />
      </div>
      <div className="my-6 mx-4 lg:my-12 lg:ml-28 lg:mr-20">
        <NutritionCarousal />
      </div>
      <h1 className="text-xl md:text-3xl font-semibold my-6 mx-4 lg:mx-28">All Products</h1>
      <div className="flex justify-between flex-wrap ">
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
      </div>
    </div>
  );
};

export default Nutrition;