require("dotenv").config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import ConnectDB from './database/connection';
import Auth from './API/Auth/index';
import Restaurant from './API/Restaurant/index'
import passport from 'passport';
import googleAuthConfig from './config/Google.config';

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());
googleAuthConfig(passport);
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);

zomato.get("/", (req,res) => res.json({message: "SetUp Successfull🤩"}));


zomato.listen(4000, () => 
ConnectDB().then(() => console.log("Server is Running!!😎"))
.catch((error) => console.log("Server is Running!!😎, but " + error.message)));