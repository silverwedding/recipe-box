"use strict";
import { connect } from "react-redux";
import RecipeForm from "../components/RecipeForm";
import { editRecipe } from "../actions/";
import { reduxForm } from "redux-form";

const RecipeReduxForm = reduxForm({
    enableReinitialize: true,
    fields: ["id", "name", "ingredients", "method"]
})(RecipeForm);

const mapStateToProps = (state, { recipe: { id, name, ingredients, method } }) => {
    return (
    {
        form: "edit-recipe-" + id,
        initialValues: {
            id: id,
            name: name,
            ingredients: ingredients.join("\n"),
            method: method.join("\n")
        }
    }
    );
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: ({ id, name, ingredients, method }) => {
        dispatch(editRecipe(id, name, ingredients.split("\n"), method.split("\n")));
    }
});

const EditRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeReduxForm);

export default EditRecipesContainer;