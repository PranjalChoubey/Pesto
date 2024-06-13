import asyncHandler from "../middleWare/asyncHandler.js"
import Product from "../models/productModel.js"


const GetProducts = asyncHandler(async(res) => {
        const Products = await Product.find ({});
           res.json(Products);
       });

export default GetProducts;