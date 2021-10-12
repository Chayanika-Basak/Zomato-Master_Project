import React from 'react'
import RestaurantNavbar from '../components/Navbar/restaurant.navbar'
import ImageGrid from '../components/Restaurant/ImageGrid'

const RestaurantLayout = (props) => {
    return (
        <>
            <RestaurantNavbar/>
            <ImageGrid
                images={[
                    "https://b.zmtcdn.com/data/pictures/5/18662565/5ee36a86e57db8ab19b7d7e63a7affb9_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/5/18662565/e50d23e4a2b2c56f5e63628729cf9fdd.jpg?fit=around|300:273&crop=300:273;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/5/18662565/e277577f7d1f48d3939643da05ffcb97.jpg?fit=around|300:273&crop=300:273;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/5/18662565/25a9f70575c875395af68da1d1ccc413.jpg?fit=around|300:273&crop=300:273;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/5/18662565/e50d23e4a2b2c56f5e63628729cf9fdd.jpg?fit=around|300:273&crop=300:273;*,*"
                ]}
            />
            {props.children}            
        </>
    )
}

export default RestaurantLayout
