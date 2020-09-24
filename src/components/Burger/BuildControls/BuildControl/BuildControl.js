import React from "react";
import PropTypes from 'prop-types';
//CSS
import classes from "./BuildControl.css";

const BuildControl = ({
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

BuildControl.propTypes = {
  disabled: PropTypes.bool,
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  label: PropTypes.string,
}

export default BuildControl;
