import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from 'colors';

import users from '.data/users.js';
import products from './data/products.js';

import UserModel from './models/user.modle.js';
import ProductModel from './models/product.model.js';
import OrderModel from './models/order.model.js';

import connectDatabase from "./config/db.js";

dotenv.config();

connectDatabase();

const importData = async () => {
    try {


        const createusers = await UserModel.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return {...product, user:adminUserId}
        });

        await ProductModel.insertMany(sampleProducts);

        console.log('Data imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(`Error: ${error}.red.inverse`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try{
        await OrderModel.deleteMany({});
        await ProductModel.deleteMany({});
        await UserModel.deleteMany({});

        console.log(`Data destroyed`)
    } catch (error) {
        console.log(`Error: ${error}.red.inverse`);
        process.exit(1);
    }
}

if(process.argv[2] === '-id'){
    destroyData();
} else {
    importData();
}

importData();