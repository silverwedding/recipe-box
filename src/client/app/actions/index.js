"use strict";

const ADD_RECIPE = "ADD_RECIPE";
const DELETE_RECIPE = "DELETE_RECIPE";
const EDIT_RECIPE = "EDIT_RECIPE";

let nextRecipeId = 4;

export const addRecipe = (name, ingredients, method) => ({
    type: ADD_RECIPE,
    id: nextRecipeId++,
    name: name,
    ingredients: ingredients,
    method: method
});

export const editRecipe = (id, name, ingredients, method) => ({
    type: EDIT_RECIPE,
    id: id,
    name: name,
    ingredients: ingredients,
    method: method
});

export const deleteRecipe = (id) => ({
    type: DELETE_RECIPE,
    id: id
});