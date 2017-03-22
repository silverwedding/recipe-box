"use strict";
import { createStore, compose, combineReducers } from "redux";
import { recipes } from "./reducers/";
import { reducer as formReducer } from "redux-form";
import { defaultRecipes } from "./data/";

const reducers = {
    recipes: recipes,
    form: formReducer
};

const reducer = combineReducers(reducers);


export const defaultState = {
    recipes: JSON.parse(localStorage.getItem("_user_recipes")) || defaultRecipes,
    form: {}
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, defaultState, enhancers);

store.subscribe(() => {
    let recipes = store.getState();
    recipes = recipes.recipes;
    localStorage.setItem("_user_recipes", JSON.stringify(recipes));
});

export default store;
