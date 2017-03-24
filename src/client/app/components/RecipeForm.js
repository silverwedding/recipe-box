"use strict";
import React from "react";
import { Field } from "redux-form";

const RecipeForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <div>
            <form className="form-group" onSubmit={handleSubmit}>
                <Field
                    name="id"
                    id="id"
                    component="input"
                    className="form-control"
                    type="hidden" />
                <div className="form-group">
                <label htmlFor="recipeName">Recipe Name</label>
                    <Field
                        name="name"
                        id="name"
                        component="input"
                        className="form-control"
                        type="text"
                        placeholder="Recipe Name" />
                </div>
                <div className="form-group">
                    <Field
                        name="ingredients"
                        id="ingredients"
                        rows="3"
                        component="textarea"
                        className="form-control"
                        type="text"
                        placeholder="Enter Ingredients on seperate lines" />
                </div>
                <div className="form-group">
                    <Field
                        name="method"
                        id="method"
                        rows="3"
                        component="textarea"
                        className="form-control"
                        type="text"
                        placeholder="Enter Method on seperate lines" />
                </div>
            </form>
            <div className="modal-footer">
                <button
                    type="submit"
                    disabled={pristine || submitting}
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    data-dismiss="modal" >
                    Submit
                </button>
                <button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                    className="btn btn-primary"
                    data-dismiss="modal" >
                    Close
                </button>
            </div>
        </div>
    );
};

export default RecipeForm;