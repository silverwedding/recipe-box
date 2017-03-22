import React from "react";
import Ingredients from "./Ingredients";
import EditRecipe from "./EditRecipe";

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
                <div className="panel-body"><h4 className="text-center">Ingredients</h4>
                <hr />
                <Ingredients ingredients={recipe.ingredients}/>
                <div className="btn-toolbar">
                        <EditRecipe recipe={recipe} />
                        <button
                            className="btn btn-default"
                            data-toggle="modal"
                            data-target={"#editRecipe" + recipe.id} >Edit</button>
                        <button className="btn btn-danger" onClick={ deleteRecipe } >Delete</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;