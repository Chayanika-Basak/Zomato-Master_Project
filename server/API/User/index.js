import express from 'express';
import passport from 'passport';
import {UserModel} from '../../database/allModels';
import { ValidateUserId, ValidateUserDetails } from '../../Validation/User';

const Router = express.Router();

/*
Route     /
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { email, fullname, phoneNumber, address } =
      req.session.passport.user._doc;

    return res.json({ user: { email, fullname, phoneNumber, address } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /:_id
Des       get user data
Params    _id
Access    Public
Method    GET  
*/

Router.get("/:_id", async (req, res) => {
    try{
        await ValidateUserId(req.params);

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
        await ValidateUserId(req.params);
        await ValidateUserDetails(req.body);
        
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