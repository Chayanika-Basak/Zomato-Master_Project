import express from 'express';
import passport from 'passport';
import {RestaurantModel} from '../../database/allModels';

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
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({city});

        return res.json({restaurants})
    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});