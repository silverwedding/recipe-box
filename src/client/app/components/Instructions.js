'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ method }) => {
  const instructions = method.map((instruction, i) => (
        <li key={i} className="list-group-item ingredient">{instruction}</li>
    ));

  return (
        <ul className="list-group">{instructions}</ul>
  );
};

Instructions.propTypes = {
  method: PropTypes.array.isRequired
};

export default Instructions;