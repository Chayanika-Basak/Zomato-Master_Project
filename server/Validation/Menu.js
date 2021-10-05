import joi from 'joi';

export const ValidateMenuId = (MenuId) => {
   const Schema = joi.object({
       _id: joi.string().required()
   });

   return Schema.validateAsync(MenuId);
}


