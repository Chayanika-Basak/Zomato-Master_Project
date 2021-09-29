import express from 'express';
import passport from 'passport';
import {UserModel} from '../../database/allModels';

const Router = express.Router();

/*
Route     /:_id
Des       get user data
Params    _id
Access    Public
Method    GET  
*/

Router.get("/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const getUser = await UserModel.find({user: _id});

        return res.status(200).json({user: getUser});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /update/:_id
Des       update user id
Params    _id
Body      user data
Access    Public
Method    PUT  
*/

Router.put("/update/:_userID", async (req, res) => {
    try{
        const {_userID} = req.params;
        const {userData} = req.body;

        const updateUserData = await  UserModel.findByIdAndUpdate(_userID, {
            $set: userData
        },
        {
            new: true
        }
        );

        return res.json({user: updateUserData});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;