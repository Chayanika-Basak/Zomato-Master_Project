import joi from 'joi';

export const ValidateUserDetails = (userData) => {
   const Schema = joi.object({
       fullname: joi.string().required().min(5),
       email: joi.string().email().required(),
       password: joi.string().min(5),
       address: joi.array().items(joi.object({detail: joi.string(), for: joi.string()})),
       phonenumber: joi.number()
   });

   return Schema.validateAsync(userData);
}

export const ValidateUserId = (userId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });
 
    return Schema.validateAsync(userId);
 }