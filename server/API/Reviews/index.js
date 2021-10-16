import express from 'express';
import passport from 'passport';
import {ReviewsModel} from '../../database/allModels';
import { ValidateReviewDetails, ValidateReviewId } from '../../Validation/Reviews';

const Router = express.Router();

/*
Route     /
Des       Get all review
Params    resid
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:resid", async (req, res) => {
    try {
      const reviews = await ReviewModel.find({ restaurant: req.params.resid });
      return res.json({ reviews });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/*
Route     /new
Des       Add new food/restaurant review/rating
Params    none
body      review object
Access    Public
Method    POST 
*/

Router.post("/new", async (req, res) => {
    try{
        await ValidateReviewDetails(req.body);

        const {reviewData} = req.body;
        
        await ReviewsModel.create(reviewData);

        return res.json({review: "Successfully created review"});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /delete
Des       Delete a review
Params    _id
Body      none
Access    Public
Method    DELETE 
*/

Router.delete("/delete/:_id", async (req, res) => {
    try{
        await ValidateReviewId(req.params);
        
        const {_id} = req.params;
        
        await ReviewsModel.findByIdAndDelete(_id);

        return res.json({review: "Successfully deleted review"});
        
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;