"use strict";

import React from "react";
import AddRecipeFormContainer from "../containers/AddRecipeFormContainer";

const AddRecipe = ({ addRecipe }) => {
    return (
        <div
            className="modal fade"
            id="addRecipe"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        <AddRecipeFormContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe;