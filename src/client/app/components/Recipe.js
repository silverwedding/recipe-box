"use strict";
import React, { PropTypes } from "react";
import Ingredients from "./Ingredients";
import EditRecipe from "./EditRecipe";
import Instructions from "./Instructions";

const Recipe = ({ recipe, deleteRecipe }) => {
    return (
        <div className="panel panel-default recipe">
            <div className="panel-heading" role="tab" id={"heading" + recipe.id}>
                <h4 className="panel-title recipe-name">
                <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href={"#collapse" + recipe.id}
                    aria-expanded="true"
                    aria-controls={"collapse" + recipe.id} >
                    {recipe.name}
                </a>
                </h4>
            </div>
            <div
                id={"collapse" + recipe.id}
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby={"heading" + recipe.id} >
                <div className="panel-body">
                    <h4 className="text-center recipe-h4">Ingredients</h4>
                    <hr />
                    <Ingredients ingredients={recipe.ingredients} />
                    <h4 className="text-center recipe-h4">Method</h4>
                    <hr />
                    <Instructions method={recipe.method} />
                    <div className="btn-toolbar">
                            <EditRecipe recipe={recipe} />
                            <button
                                className="btn btn-default edit-btn"
                                data-toggle="modal"
                                data-target={"#editRecipe" + recipe.id} >
                                Edit
                            </button>
                            <button
                                className="btn btn-default delete-btn"
                                onClick={ deleteRecipe } >
                                Delete
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            ingredients: PropTypes.array.isRequired,
            method: PropTypes.array.isRequired
        }
    ),
    deleteRecipe: PropTypes.func.isRequired
};

export default Recipe;