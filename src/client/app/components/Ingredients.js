'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => {
  const ingredientsList = ingredients.map((ingredient, i) => (
        <li key={i} className="list-group-item ingredient">{ingredient}</li>
    ));

  return (
        <ul className="list-group">{ingredientsList}</ul>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired
};

export default Ingredients;