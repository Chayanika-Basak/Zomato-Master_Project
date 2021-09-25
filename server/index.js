require("dotenv").config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import ConnectDB from './database/connection';
import Auth from './API/Auth/index';

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

zomato.use("/auth", Auth);

zomato.get("/", (req,res) => res.json({message: "SetUp Successfull😋 Hihi"}));

zomato.listen(4000, () => 
ConnectDB().then(() => console.log("Server is Running!!😎"))
.catch((error) => console.log("Server is Running!!😎, but " + error.message)));