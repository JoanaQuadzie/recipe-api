import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res) => {
    // Add recipe to the database
    const createResult = await RecipeModelcreate(req.body);
    // Return the response
    res.json(createResult);
}    

export const getRecipes = (req, res) => {
    res.send('Get recipe');
}

export const getRecipe = (req, res) => {
    res.send('Get recipe');
}

export const updateRecipe = (req, res) => {
    res.send('Update recipe');
}

export const deleteRecipe = (req, res) => {
    res.send('Delete recipe');
}