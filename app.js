import express from "express";
import recipesRoutes from "./routes/recipes.routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";



// load env variables - this should always be the first to be called
dotenv.config()


const app = express();

const PORT = process.env.PORT

// Apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(express.static('uploads'));


// Use routes
app.use('/recipes', recipesRoutes);


// make database connection using mongoose
await mongoose.connect(process.env.MONGO_URL);


app.listen(PORT, () => {
    console.log(`express is running on ${PORT}`)
});


// listen appears at the bottom always