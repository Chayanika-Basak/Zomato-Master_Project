import React from 'react'
import {useParams} from 'react-router-dom'
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/Nightlife';
import Nutrition from '../components/Nutrition';

const Home = () => {

    const {type} = useParams();

    return(
        <>
            {type === "delivery" && <Delivery/>}
            {type === "dining" && <Dining/>}
            {type === "nightlife" && <NightLife/>}
            {type === "nutrition" && <Nutrition/>}
        </>
    )
}

export default Home;