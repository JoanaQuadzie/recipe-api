import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
    try {
        // Add recipe to the database
        const createResult = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return the response
        res.status(201).json(createResult);
    } catch (error) {
       // Forward to express error handler- use a try catch to handle errors to prevent app from crashing
        next(error);
    }
}    

export const getRecipes = async (req, res, next) => {
    try {
        // Get all recipes from databsase
       const getrecipe = req.body
       const getAllRecipes = await RecipeModel.find();
        // Return response
       res.json(getAllRecipes);
    }
     catch (error) {
        next(error);
    }
}

export const getRecipe = async (req, res, next) => {
    try {
        // Get one recipe
        const getOneRecipe = await RecipeModel.findById(req.params.id);
        // Return 404 if recipe not found
        if (!getOneRecipe === null) {
           return res.status(404).json({
                message:`Recipe with ObjectId: ${req.params.id} Not Found`});
        }
        // Return response
        res.json(getOneRecipe);
    }
     catch (error) {
        next(error)
        
    }
}

export const updateRecipe = (req, res) => {
    res.send('Update recipe');
}

export const deleteRecipe = (req, res) => {
    res.send('Delete recipe');
}