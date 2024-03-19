import { Router } from "express";
import Recipe from "../models/recipe.js";

const router = Router();

router.post("/recipes", (req, res) => {
    res.send('Add recipe');
});

router.get("/recipes", (req, res) => {
    res.send('Add recipe');
});

router.get("/recipes/:id", (req, res) => {
    res.send('Add recipe');
});

router.patch("/recipes/:id", (req, res) => {
    res.send('Add recipe');
});

router.delete("/recipes/:id", (req, res) => {
    res.send('Add recipe');
});


export default router;