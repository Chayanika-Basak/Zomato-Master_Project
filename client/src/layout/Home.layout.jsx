import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";

// redux action
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const HomeLayout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <Navbar />
      <FoodTab />
      {props.children}
    </>
  );
};

export default HomeLayout;