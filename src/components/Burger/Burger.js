import React from "react";
import PropTypes from 'prop-types';
// CSS
import classes from "./Burger.css";
// Components
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  let transformIngredients = Object.keys(ingredients)
    .map((keys) => {
      return [...Array(ingredients[keys])].map((_, i) => {
        return <BurgerIngredient key={`${keys}-${i}`} type={keys} />;
      });
    })
    .reduce((previous, current) => {
      return previous.concat(current);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients! </p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object
}

export default Burger;
