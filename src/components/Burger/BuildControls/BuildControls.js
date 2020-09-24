import React from "react";
import PropTypes from "prop-types";
// CSS
import classes from "./BuildControls.css";
// Components
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disableButton,
  totalPrice,
  purchase,
  orderHandler,
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>Price Total: {totalPrice.toFixed(2)}</p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          ingredientAdded={() => ingredientAdded(ctrl.type)}
          ingredientRemoved={() => ingredientRemoved(ctrl.type)}
          disabled={disableButton(ctrl.type)}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!purchase}
        onClick={orderHandler}
      >
        Order Now
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  disableButton: PropTypes.func,
  totalPrice: PropTypes.number,
  purchase: PropTypes.bool,
  orderHandler: PropTypes.func
}

export default BuildControls;
