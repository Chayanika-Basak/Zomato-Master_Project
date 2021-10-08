import React from 'react'
import {useParams} from 'react-router-dom'
import Delivery from './Delivery';
import Dining from './Dining';
import NightLife from './Nightlife';
import Nutrition from './Nutrition';

const Master = () => {

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

export default Master;