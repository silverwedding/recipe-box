"use strict";
import { connect } from "react-redux";
import RecipeForm from "../components/RecipeForm";
import { editRecipe } from "../actions/";
import { reduxForm } from "redux-form";

const RecipeReduxForm = reduxForm({
    enableReinitialize: true,
    fields: ["id", "name", "ingredients"]
})(RecipeForm);

const mapStateToProps = (state, ownProps) => {
    return (
    {
        form: "edit-recipe-" + ownProps.recipe.id,
        initialValues: {
            id: ownProps.recipe.id,
            name: ownProps.recipe.name,
            ingredients: ownProps.recipe.ingredients.join("\n")

        }
    }
    );
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (value) => {
        dispatch(editRecipe(value.id, value.name, value.ingredients.split("\n")));
    }
});

const EditRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeReduxForm);

export default EditRecipesContainer;