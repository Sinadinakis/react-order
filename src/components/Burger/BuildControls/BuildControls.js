import React from 'react';

import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = ({ ingredientAdded, ingredientRemoved, disableButton, totalPrice, purchase }) => {
    return (
        <div className={classes.BuildControls}>
            <p>Price Total: {totalPrice.toFixed(2)}</p>
            {controls.map(ctrl => (
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
            >
                Order Now
            </button>
        </div>
    )
}

export default BuildControls;