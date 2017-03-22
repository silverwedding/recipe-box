"use strict";
import { connect } from "react-redux";
import Recipes from "../components/Recipes";

const mapStateToProps = (state) => (
	{ recipes: state.recipes }
);

const RecipesContainer = connect(mapStateToProps, null)(Recipes);

export default RecipesContainer;
