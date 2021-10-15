import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components

import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButtons from "../components/Restaurant/InfoButtons";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import TabContainer from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

// Redux actions
import { getSpecificRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/Image/Image.action";
import { getCart } from "../Redux/Reducer/Cart/Cart.action";
import RestaurantNavbar from "../components/Navbar/restaurant.navbar";
const RestaurantLayout = (props) => {
  const [restaurant, setRestaurant] = useState({
    images: [{ location: "https://b.zmtcdn.com/data/pictures/chains/6/19683396/409a05301d8d07183e5c124682736554.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"},
              { location: "https://b.zmtcdn.com/data/pictures/chains/6/19683396/00e1585ef2dfec350b1212589d61b04b.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"},
              { location: "https://b.zmtcdn.com/data/pictures/chains/6/19683396/1a8e5ed0cd2b501fed70e4825e4048b7.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"},
              { location: "https://b.zmtcdn.com/data/pictures/chains/6/19683396/d51a569e176c2d116a007a220d4dee9f.jpg?fit=around|300:273&crop=300:273;*,*"},
              {location: "https://b.zmtcdn.com/data/pictures/chains/6/19683396/00e1585ef2dfec350b1212589d61b04b.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"},
            ],
    name: "Obati By Etsu",
    cuisine: "Burger, Sandwich, Italian, Continental",
    address: "Greater Kailash 1(GK1), New-Delhi",
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload.restaurant,
      }));

      if(data.payload.restaurant.photos)
      dispatch(getImage(data.payload.restaurant.photos)).then((data) =>
        setRestaurant((prev) => ({ ...prev, ...data.payload.image }))
      );
    });

    dispatch(getCart());
  }, []);

  return (
    <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20 pb-10 ">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.rating || 0}
          deliveryRating={restaurant?.rating || 0}
          cuisine={restaurant?.cuising}
          address={restaurant?.address}
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;