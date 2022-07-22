import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose.connect(process.env.)


app.use((req,res,next) => {
    const error = new Error(`Cannot process route: ${req.originalUrl}`);
    console.log("URL: ", req.originalUrl);
    next();
});

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 :
})
