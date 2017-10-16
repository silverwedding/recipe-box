'use strict';
import { connect } from 'react-redux';
import RecipeForm from '../components/RecipeForm';
import { addRecipe } from '../actions/';
import { reduxForm } from 'redux-form';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, ingredients, method }) => {
    dispatch(addRecipe(name, ingredients.split('\n') || [], method.split('\n') || []));
  }
});

const AddRecipesContainer = connect(null, mapDispatchToProps)(reduxForm({
  form: 'add-recipe'
})(RecipeForm));

export default AddRecipesContainer;