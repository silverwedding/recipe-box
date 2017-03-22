"use strict";

const ADD_RECIPE = "ADD_RECIPE";
const DELETE_RECIPE = "DELETE_RECIPE";
const EDIT_RECIPE = "EDIT_RECIPE";

let nextRecipeId = 4;

export const addRecipe = (name, ingredients) => ({
    type: ADD_RECIPE,
    id: nextRecipeId++,
    name: name,
    ingredients: ingredients
});

export const editRecipe = (id, name, ingredients) => ({
    type: EDIT_RECIPE,
    id: id,
    name: name,
    ingredients: ingredients
});

export const deleteRecipe = (id) => ({
    type: DELETE_RECIPE,
    id: id
});