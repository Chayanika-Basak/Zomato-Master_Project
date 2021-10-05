import React from 'react'
import DeliveryCategory from './DeliveryCategory';

const DeliveryCarousal = () => {
    return(
        <>
            <div>
                <h1 className="text-xl font-semibold ml-4 mb-4">Inspiration for your first order</h1>
                <div className="flex flex-wrap justify-evenly">
                    <DeliveryCategory/>
                    <DeliveryCategory/>
                    <DeliveryCategory/>
                    <DeliveryCategory/>
                    <DeliveryCategory/>
                    <DeliveryCategory/>
                </div>
            </div>
        </>

    )
}

export default DeliveryCarousal;