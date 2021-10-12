import React from 'react'
import { Route } from 'react-router'
import RestaurantLayout from '../layout/Restaurant.layout'

const RestaurantHOC = ({ component: Component, ...rest}) => {
    return (
        <>
        <Route
            {...rest}
            component={(props) => (
            <RestaurantLayout>
                <Component {...props} />
            </RestaurantLayout>
        )}
        />
        </>
    )
}

export default RestaurantHOC
