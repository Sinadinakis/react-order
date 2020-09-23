import React from "react";

import classes from "./BuildControl.css";

const BuilControl = ({
  label,
  ingredientAdded,
  ingredientRemoved,
  disabled,
}) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button
      className={classes.Less}
      onClick={ingredientRemoved}
      disabled={disabled}
    >
      Remove
    </button>
    <button className={classes.More} onClick={ingredientAdded}>
      Add
    </button>
  </div>
);

export default BuilControl;
