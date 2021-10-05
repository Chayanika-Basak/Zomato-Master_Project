import joi from 'joi';

export const ValidateOrderId = (OrderId) => {
   const Schema = joi.object({
       _id: joi.string().required()
   });

   return Schema.validateAsync(OrderId);
}

export const ValidateOrderDetails = (OrderObj) => {
    const Schema = joi.object({
        user: joi.string().required(),
        orderDetails: joi.array().items(joi.object({
            food: joi.string(),
            quantity: joi.number().precision(0).required(),
            paymode: joi.string().required(),
            status: joi.string().required().default("Order Placed"),
            paymentDetails: joi.object({
                itemTotal: joi.number().required(),
                promo: joi.number().required(),
                tax: joi.number().required(),
            })
        }))
    });
 
    return Schema.validateAsync(OrderObj);
 }


