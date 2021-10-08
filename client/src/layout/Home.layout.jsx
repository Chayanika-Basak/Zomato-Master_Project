import React from 'react'
import FoodTab from '../components/FoodTab';
import Navbar from '../components/Navbar';
const HomeLayout = (props) => {
    return (
    <>
        <div className="hidden lg:block">
            <Navbar />
            <FoodTab/>
            {props.children}  
        </div>
        <div className="lg:hidden">
            <Navbar />
            {props.children}  
            <FoodTab/>
        </div>
      
    </>
    );
}

export default HomeLayout