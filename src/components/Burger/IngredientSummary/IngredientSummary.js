import React, { memo } from 'react';
import PropTypes from 'prop-types';

const IngredientSummary = ({ ingredients, totalPrice }) => {
    return (
        <>
            <ul>
                {Object.keys(ingredients)
                    .map((item) => (
                        <li
                            key={item}
                            style={{
                                textTransform: "capitalize",
                                fontWeight: "bold",
                            }}
                        >
                            {item} : {ingredients[item]}
                        </li>
                    ))}
            </ul>
            <p>Total Price: {totalPrice.toFixed(2)}</p>
        </>
    )
}

IngredientSummary.propTypes = {
    ingredients: PropTypes.object,
    totalPrice: PropTypes.number
}

export default memo(IngredientSummary);