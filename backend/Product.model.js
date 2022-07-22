import mongoose from "mongoose";
const {Schema} = mongoose;
 const ProductSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    desciption: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    reviews: {
        [reviewSchema],
    },
    brand: {
        type: String,
        required: true,
    },
    {
        timestamps: true,
    }
 });