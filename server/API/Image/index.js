import express from 'express';
import passport from 'passport';
import {ImageModel} from '../../database/allModels';
import multer from 'multer';

const Router = express.Router();

//Utils
import { s3Upload } from '../../Utils/AWS/S3';

//multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route     /
Des       Uploads given image to S3 bucket, and saves files link to mongodb
Params    none
Access    Public
Method    POST  
*/

//"bucketName" you'll make yourself when you create your AWS account
Router.post("/", upload.array(["file","file1","file2","file3"], 4) ,async (req, res) => {
    try{
        const file = req.files;

        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({uploadImage: "YAY!!🤘🏻"});

    }catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;













/*
S3 bucket options
const bucketOptions = {
    Bucket: "bucketName",
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
    //ACL -> Access Control List
};
*/