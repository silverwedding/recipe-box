'use strict';
import * as types from '../actions/types';

export const recipes = (state = [], action = {}) => {
  switch (action.type) {
  case types.ADD_RECIPE:
    return [
      ...state,
      recipe(undefined, action)
    ];
  case types.EDIT_RECIPE:
    return state.map(r =>
        r.id === action.id ? recipe(undefined, action) : r
      );
  case types.DELETE_RECIPE:
    return state.filter(r =>
        r.id !== action.id
      );
  default:
    return state;
  }
};

const recipe = (state, action) => {
  switch (action.type) {
  case types.ADD_RECIPE:
    return {
      id: action.id,
      name: action.name,
      ingredients: action.ingredients,
      method: action.method
    };
  case types.EDIT_RECIPE:
    return {
      id: action.id,
      name: action.name,
      ingredients: action.ingredients,
      method: action.method
    };
  default:
    return state;
  }
};
