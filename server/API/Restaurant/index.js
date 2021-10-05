import express from 'express';
import passport from 'passport';
import {RestaurantModel} from '../../database/allModels';

//validation
import { ValidateRestaurantCity,  ValidateRestaurantSearchString} from '../../Validation/Restaurant';
import { ValidateRestaurantId } from '../../Validation/Food';

const Router = express.Router();

/*
Route     /
Des       Get all the restaurant details based on city
Params    none
Access    Public
Method    GET  
*/

Router.get("/", async (req, res) => {
    try{
        await ValidateRestaurantCity(req.query);

        const { city } = req.query;
        const restaurants = await RestaurantModel.find({city});

        return res.json({restaurants})
    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /
Des       Get individual restaurant details based on id
Params    _id
Access    Public
Method    GET  
*/

Router.get("/:_id", async (req, res) => {
    try{
        await ValidateRestaurantId(req.params);

        const { _id } = req.params;
        const restaurants = await RestaurantModel.findOne(_id);
        if(!restaurants)  return res.status(404).json({error: "Restaurant not found"});
        else return res.json({restaurants})
    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /search
Des       Get individual restaurant details based on search string
Params    none
Body      search string
Access    Public
Method    GET  
*/

Router.get("/search", async (req, res) => {
    try{
        await ValidateRestaurantSearchString(req.body);

        const { searchString } = req.body;
        const restaurants = await RestaurantModel.find({name: { $regex: searchString, $options: "i" }});
        if(!restaurants)  return res.status(404).json({error: `No restaurant matched with ${searchString}`});
        else return res.json({restaurants})
    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;