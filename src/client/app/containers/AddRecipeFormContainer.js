"use strict";
import { connect } from "react-redux";
import RecipeForm from "../components/RecipeForm";
import { addRecipe } from "../actions/";
import { reduxForm } from "redux-form";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (value) => {
        dispatch(addRecipe(value.name, value.ingredients.split("\n") || []));
    }
});

const AddRecipesContainer = connect(null, mapDispatchToProps)(reduxForm({
    form: "add-recipe"
})(RecipeForm));

export default AddRecipesContainer;