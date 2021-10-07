import React from 'react'

const DeliverySmCard = ({image, title}) => {
    return(
        <>
            <div className="lg:hidden g-white shadow rounded-md my-2">
                <div className="w-24 md:w-56 h-20">
                    <img src={image}
                    alt={title}
                    className="h-full w-full rounded-t-md object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-sm my-1 text-center font-light">{title}</h3>
                </div>
            </div>
        </>
    )
}

const DeliveryLgCard = ({image, title}) => {
    return(
        <>
            <div className="hidden lg:block bg-gray-100">
                <div className="w-64 h-48">
                    <img src={image}
                    alt={title}
                    className="h-full w-full shadow rounded-md object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-2xl my-1 text-gray-700 pl-1">{title}</h3>
                </div>
            </div>
        </>
    )
}

const DeliveryCategory = (props) => {
    return (
        <>
            <DeliverySmCard {...props}/>
            <DeliveryLgCard {...props}/>
        </>
    )
}

export default DeliveryCategory
