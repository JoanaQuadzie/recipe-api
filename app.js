import express from "express";
import recipesRoutes from "./routes/recipes.routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();

dotenv.config()
const PORT = process.env.PORT


// Use routes
app.use(recipesRoutes);


// make database connection using mongoose
await mongoose.connect(process.env.MONGO_URL);


app.listen(PORT, () => {
    console.log(`express is running on ${PORT}`)
});