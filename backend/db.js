import mongoose from "mongoose";

const connectDatabase = async () => {
    try{
        const conn = await mongoose.connect(
            process.env.MONGO.URI,
            {
                //useUnifedTopology: true,
                useNewUrlParser: true,
                //useCreateIndex: true
            }
        );

        console.log(`MongoDB connection`)
    }
    catch (error){
        console.log(`MongoDB connection error: ${error.messageprocess.exit(1)`);
    }
};