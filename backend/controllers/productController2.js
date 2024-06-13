import asyncHandler from "../middleWare/asyncHandler.js"
import Product from "../models/productModel.js"

const GetProductById = asyncHandler(async(req,res) => {
    const Products = await Products.findById(req.params.id);
 res.json(Product);

 if(Product) {

    return res.json(Product);
 }
    else{
res.status(404);
throw new Error('Product not found'); 
    }
});

export default GetProductById;