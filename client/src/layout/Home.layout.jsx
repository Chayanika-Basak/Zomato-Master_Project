import React from 'react'
import FoodTab from '../components/FoodTab';
import Navbar from '../components/Navbar';
const HomeLayout = (props) => {
    return (
    <>
    <Navbar />
    <FoodTab/>
    {props.children}    
    </>
    );
}

export default HomeLayout