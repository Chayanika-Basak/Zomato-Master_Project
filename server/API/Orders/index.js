import express from 'express';
import passport from 'passport';
import {OrderModel} from '../../database/allModels';

const Router = express.Router();

/*
Route     /
Des       get all orders based on id
Params    _id
Access    Public
Method    GET  
*/

Router.get("/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const getOrders = await OrderModel.find({user: _id});
        if(!getOrders){
            return res.status(404).json({error: "User not found!!"});
        }

        return res.status(200).json({order: getOrders});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /new
Des       Add new orders
Params    _id
Access    Public
Method    POST  
*/

Router.post("/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const {orderDetails} = req.body;

        const addNewOrder = await  OrderModel.findOneAndUpdate({
            user: _id
        },
        {
            $push: {orderDetails}
        },
        {
            new:true 
        }
        );

        return res.status(200).json({order: addNewOrder});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;