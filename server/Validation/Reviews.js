import joi from 'joi';

export const ValidateReviewDetails = (ReviewObj) => {
    const Schema = joi.object({
        food: joi.string(),
        restaurant: joi.string(),
        user: joi.string(),
        rating: joi.number().required(),
        reviewText: joi.string().required(),
        isFoodReview: joi.boolean(),
        isRestaurantReview: joi.boolean(),
        photos: joi.array().items(joi.string())
    });
 
    return Schema.validateAsync(ReviewObj);
 }

 export const ValidateReviewId = (ReviewId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });
 
    return Schema.validateAsync(ReviewId);
 }


