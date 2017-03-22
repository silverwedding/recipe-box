"use strict";
const ADD_RECIPE = "ADD_RECIPE";
const DELETE_RECIPE = "DELETE_RECIPE";
const EDIT_RECIPE = "EDIT_RECIPE";

const recipe = (state, action) => {
    switch (action.type) {
    case ADD_RECIPE:
        return {
            id: action.id,
            name: action.name,
            ingredients: action.ingredients
        };
    case EDIT_RECIPE:
        return {
            id: action.id,
            name: action.name,
            ingredients: action.ingredients
        };
    default:
        return state;
    }
};

export const recipes = (state = [], action) => {
    switch (action.type) {
    case ADD_RECIPE:
        return [
            ...state,
            recipe(undefined, action)
        ];
    case EDIT_RECIPE:
        return state.map(r =>
            r.id === action.id ? recipe(undefined, action) : r
        );
    case DELETE_RECIPE:
        return state.filter(r =>
            r.id !== action.id
        );
    default:
        return state;
    }
};
