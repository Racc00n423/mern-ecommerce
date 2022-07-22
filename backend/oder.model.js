import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema(
    {
        user: {
            type: String,
            required: true
        },
        orderItems: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
     { timestamps: true}
})