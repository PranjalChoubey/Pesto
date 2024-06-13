import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
     orderItems:[
        {
      name:{type:String}, 
      qty:{type:Number}, 
      image:{type:String}, 
      price:{type:Number}, 
      product: 
      {
        type: mongoose.Schema.Types.ObjectId,
         
         ref: "product",
    },   
}
],

shippingAddress:{
    address:{type:String}, 
      city:{type:String}, 
      postalCode:{type:String}, 
      country:{type:String},
},
paymentMethod : {
    id:{type:String}, 
    status:{type:String}, 
    update_time:{type:String}, 
    email_address:{type:String},
},
itemsPrice:{
    type: Number,
    require: true,
    default: 0.0,
},
taxPrice:{
    type: Number,
    require: true,
    default: 0.0,
},
shippingPrice:{
    type: Number,
    require: true,
    default: 0.0,
},
totalPrice:{
    type: Number,
    require: true,
    default: 0.0,
},
isPaid:{
    type: Boolean,
    require: true,
    default: 0.0,
},
paidAt:{
    type: Date,
},
isDelivered:{
    type: Boolean,
    require: true,
    default: false,
},
deliveredAt:{
    type: Date,
},
},
{
    timestamps: true,
});

const Order = mongoose.model('order', orderSchema);

export default Order;