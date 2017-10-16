'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import EditRecipeFormContainer from '../containers/EditRecipeFormContainer';

const EditRecipe = ({ recipe }) => {
  return (
    <div
      className="modal fade"
      id={'editRecipe' + recipe.id}
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
            <EditRecipeFormContainer recipe={recipe} />
          </div>
        </div>
      </div>
    </div>
  );
};

EditRecipe.propTypes = {
  recipe: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
      method: PropTypes.array.isRequired
    }
    )
};

export default EditRecipe;
