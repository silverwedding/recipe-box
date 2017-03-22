"use strict";
import React from "react";

const Ingredients = ({ ingredients }) => {
    const ingredientsList = ingredients.map((ingredient, i) => (
        <li key={i} className="list-group-item ingredient">{ingredient}</li>
    ));

    return (
        <ul className="list-group">{ingredientsList}</ul>
    );
};

export default Ingredients;