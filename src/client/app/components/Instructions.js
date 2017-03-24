"use strict";
import React from "react";

const Instructions = ({ method }) => {
    const instructions = method.map((instruction, i) => (
        <li key={i} className="list-group-item ingredient">{instruction}</li>
    ));

    return (
        <ul className="list-group">{instructions}</ul>
    );
};

export default Instructions;