"use strict";
import { connect } from "react-redux";
import Recipe from "../components/Recipe";
import { deleteRecipe } from "../actions/";

const mapStateToProps = (state, ownProps) => (
    { recipe: ownProps.recipe }
);

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteRecipe: () => {
        dispatch(deleteRecipe(ownProps.recipe.id));
    }
});

const RecipesContainer = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default RecipesContainer;