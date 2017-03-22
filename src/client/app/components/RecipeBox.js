"use strict";
import React from "react";
import Recipes from "../containers/RecipesContainer";
import AddRecipe from "./AddRecipe";

const RecipeBox = ({ addRecipe }) => (
    <div className='recipe-box'>
        <button
            type="button"
            data-toggle="modal"
            data-target="#addRecipe"
            className="btn btn-default"
        >
            New Recipe
        </button>
        <div className="well">
            <Recipes />
            <AddRecipe />

        </div>
    </div>
);
export default RecipeBox;