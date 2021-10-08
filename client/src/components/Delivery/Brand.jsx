import React from 'react'
import Slider from 'react-slick'
import { PrevArrow, NextArrow } from '../CarouselArrow';

const Brand = (props) => {

    const logos=[
        "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
    ]
    const LGsettings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    const SMsettings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    return (
        <>  <div className="hidden lg:block mt-10">
                <Slider {...LGsettings}>
                    {
                        logos.map
                        (
                            (logo) => 
                            (
                                <div className="w-64 h-36">
                                    <img src={logo}
                                    alt="Brand"
                                    className="w-36 h-full rounded-xl shadow-lg"
                                    />
                                </div>
                            )
                        )
                    }
                </Slider>
            </div>
            <div className="lg:hidden mt-8 gap-3">
                <Slider {...SMsettings}>
                    {
                        logos.map
                        (
                            (logo) => 
                            (
                                <div className="w-64 h-36 p-4">
                                    <img src={logo}
                                    alt="Brand"
                                    className="w-36 h-full rounded-xl shadow-lg"
                                    />
                                </div>
                            )
                        )
                    }
                </Slider> 
            </div>
        </>
    )
}

export default Brand
