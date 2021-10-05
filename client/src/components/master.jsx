import React from 'react'
import {useParams} from 'react-router-dom'
import Delivery from './Delivery';

const Master = () => {

    const {type} = useParams();

    return(
        <>
        <div clasName="">
            {type === "delivery" && <Delivery/>}
        </div>
        </>
    )
}

export default Master;