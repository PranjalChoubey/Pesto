import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from '../models/userModel.js';


export const protect = asyncHandler(async(req,res,next)=> {
    let token;

    token = req.cookies.jwt;

    if(token) {
     try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password')
      next();
    }
     catch (error){
        res.status(401);
        throw new Error('Not autorized, token failed');
     }
    }else{
        res.status(401);
        throw new Error ('Not authorized, no Tokne');
    }
});

const Admin = (req,res,next)=> {
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401);
        throw new Error ('Not authrized admin');
    }
};

export default (protect, Admin);