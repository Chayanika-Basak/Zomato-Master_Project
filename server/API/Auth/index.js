//Library
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//Models
import { UserModel } from "../../database/allModels"

const Router = express.Router();

/*
Route: /signup
Des: Register new user with email and password
Params: none
Access: Public
Method: POST
*/

Router.post("/signup", async (req,res) => {
    try{
        //check whether email or phone number exists
        await UserModel.findByEmailAndPhone(req.body.credentials);

        //save to DB
        const newUser = await UserModel.create(req.body.credentials);
        
        //generate jwt auth token
        const token = newUser.generateJwtToken();

        //return
        return res.status(200).json({token, status:"Success"});

    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route: /signup
Des: signup with email and password
Params: none
Access: Public
Method: POST
*/

Router.post("/signup", async (req,res) => {
    try{
        //check whether email or phone number exists
        await UserModel.findByEmailAndPhone(req.body.credentials);

        //save to DB
        const newUser = await UserModel.create(req.body.credentials);
        
        //generate jwt auth token
        const token = newUser.generateJwtToken();

        //return
        return res.status(200).json({token, status:"Success"});

    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;