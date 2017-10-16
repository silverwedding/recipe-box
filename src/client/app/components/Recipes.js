'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import RecipeContainer from '../containers/RecipeContainer';

const Recipes = ({ recipes }) => {
  const halfLength = Math.ceil(recipes.length / 2);
  recipes = recipes.sort((a, b) => a.id - b.id);
  const leftSide = recipes.slice(0, halfLength);
  const rightSide = recipes.slice(halfLength);

  const leftColumn = leftSide.map((recipe, id) => (
    <RecipeContainer
      key={'left' + recipe.id}
      recipe={recipe}
    />
    ));

  const rightColumn = rightSide.map((recipe, id) => (
    <RecipeContainer
      key={'right' + recipe.id}
      recipe={recipe}
    />
  ));

  return (
    <div
      className="panel-group"
      id="accordion"
      role="tablist"
      aria-multiselectable="true"
    >
      <div className="row">
        <div className="col-md-6">
          {leftColumn}
        </div>
        <div className="col-md-6">
          {rightColumn}
        </div>
      </div>
    </div>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array
};

export default Recipes;