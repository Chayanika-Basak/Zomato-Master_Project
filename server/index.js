//environment variables
require("dotenv").config();

//libraries
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session'

//connecting to MongoDB
import ConnectDB from './database/connection';

//Micro-services
import Auth from './API/Auth/index';
import Restaurant from './API/Restaurant/index'
import Food from './API/Food/index'
import Image from './API/Image/index'
import Menu from './API/Menu/index'
import Orders from './API/Orders/index'
import Reviews from './API/Reviews/index'
import passport from 'passport';

//Google auth config
import googleAuthConfig from './config/Google.config';
import RouteConfig from './config/Route.config';

//initializing express
const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(session({
    secret: 'anything',
    resave: true,
    saveUninitialized: true
}));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/orders", Orders);
zomato.use("/reviews", Reviews);

googleAuthConfig(passport);
RouteConfig(passport);

zomato.get("/", (req,res) => res.json({message: "SetUp Successfull🤩"}));


zomato.listen(4000, () => 
ConnectDB().then(() => console.log("Server is Running!!😎"))
.catch((error) => console.log("Server is Running!!😎, but " + error.message)));