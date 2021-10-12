import React from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../CarouselArrow";

// components

import CarouselCard from "../DiningORnightlifeCarousel";

const DiningCarousal = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const collections = [
    {
        image: "https://b.zmtcdn.com/data/collections/7e296d5b75ca7b0f88e451b49e41ba99_1618208591.jpg?output-format=webp",
        title: "Live Sports Screenings",
        subtitle: "15 places"
    },
    {
        image: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015804.jpg?output-format=webp",
        title: "Newly Opened",
        subtitle: "18 places"
    },
    {
        image: "https://b.zmtcdn.com/data/collections/c61c020a7d37a8d2849da7e9bf5ece44_1633071418.jpg?output-format=webp",
        title: "October's Fave - Hudson Lane",
        subtitle: "11 places"
    },
    {
        image: "https://b.zmtcdn.com/data/collections/31ddb8269f55451682fae6e98f20c4cb_1631689069.jpg?output-format=webp",
        title: "Trending this week",
        subtitle: "30 places"
    },
    {
        image: "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
        title: "Best of Delhi NCR",
        subtitle: "163 places"
    },
    {
        image: "https://b.zmtcdn.com/data/collections/534d15b97ec6a18a13d41d92f7a3c4f4_1631615781.jpg?output-format=webp",
        title: "Taste of South",
        subtitle: "16 places"
    },
]

  return (
    <div className="w-full">
      <Slider {...settings}>
          {collections.map((collection) => (
              <CarouselCard {...collection}/>
          ))}        
      </Slider>
    </div>
  );
};

export default DiningCarousal;