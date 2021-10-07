import React from 'react'
import {DeliverySmCard, DeliveryLgCard} from './DeliveryCategory';
import Slider from 'react-slick'
import { PrevArrow, NextArrow } from '../CarouselArrow';

const DeliveryCarousal = () => {
    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    const categories = 
    [
        {
            image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title: "Pizza"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
            title: "Chicken"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
            title: "Burger"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
            title: "Paneer"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png",
            title: "Rolls"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
            title: "Chaat"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
            title: "Momos"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/efa0232fa263fd8b97ecf1c009e1b4801632716697.png",
            title: "Chaap"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
            title: "Cake"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/c5f679b7ce4d7cf0b08f120e77d22e2d1632716660.png",
            title: "Dal"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
            title: "Paratha"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
            title: "Biriyani"
        }
    ]
    return(
        <>    
            <div className="lg:hidden flex flex-wrap justify-evenly gap-1 py-2">
                {
                    categories.map
                    (
                        (food) => <DeliverySmCard {...food}/>
                        
                    )
                }
                
            </div>
            <div className="hidden bg-gray-100 lg:block gap-1 pl-10 pt-6 pb-2 w-full">
                <Slider {...settings}>
                    {
                        categories.map
                        (
                            (food) => (
                                <DeliveryLgCard {...food}/>
                            )
                            
                        )
                    }
                </Slider>
            </div>
            
        </>

    )
}

export default DeliveryCarousal;