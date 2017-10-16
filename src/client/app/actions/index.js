'use strict';
import * as types from './types';

let nextRecipeId = 4;

export const addRecipe = (name, ingredients, method) => ({
  type: types.ADD_RECIPE,
  id: nextRecipeId++,
  name: name,
  ingredients: ingredients,
  method: method
});

export const editRecipe = (id, name, ingredients, method) => ({
  type: types.EDIT_RECIPE,
  id: id,
  name: name,
  ingredients: ingredients,
  method: method
});

export const deleteRecipe = (id) => ({
  type: types.DELETE_RECIPE,
  id: id
});