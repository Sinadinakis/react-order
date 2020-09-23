import React, { useState } from "react";

import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/UI/Modal/Modal";

const INGREDIENT_PRICES = {
  salad: 1.5,
  cheese: 1.5,
  meat: 4.5,
  bacon: 2.25,
};

const BurgerBuilder = () => {
  const initialState = {
    ingredients: {
      bacon: 2,
      salad: 0,
      meat: 0,
      cheese: 0,
    },
  };
  const [state, setState] = useState(initialState);
  const [totalPrice, setTotalPrice] = useState(5);
  const [purchase, setPurchase] = useState(false);
  const [modal, setModal] = useState(false);

  const addIngredientHandler = (type) => {
    const updateCount = state.ingredients[type] + 1;
    const updateIngredients = {
      ingredients: {
        ...state.ingredients,
        [type]: updateCount,
      },
    };
    const newPrice = totalPrice + INGREDIENT_PRICES[type];
    setState(updateIngredients);
    setTotalPrice(newPrice);
    purchaseHandler(updateIngredients.ingredients);
  };

  const removeIngredientHandler = (type) => {
    if (state.ingredients[type] <= 0) {
      return;
    }
    const updateCount = state.ingredients[type] - 1;
    const updateIngredients = {
      ingredients: {
        ...state.ingredients,
        [type]: updateCount,
      },
    };
    const newPrice = totalPrice - INGREDIENT_PRICES[type];

    setState(updateIngredients);
    setTotalPrice(newPrice);
    purchaseHandler(updateIngredients.ingredients);
  };

  const disableButton = (type) => state.ingredients[type] <= 0;

  const purchaseHandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((keys) => ingredients[keys])
      .reduce((previous, current) => {
        return previous + current;
      }, 0);
    console.log(sum);
    const purchaseDisable = sum > 0;
    setPurchase(purchaseDisable);
  };

  const orderHandler = () => {
    setModal(true);
  };

  const ingredientSummary = Object.keys(state.ingredients).map((item) => (
    <li
      key={item}
      style={{
        listStyle: "none",
        textTransform: "capitalize",
        fontWeight: "bold",
      }}
    >
      {item} : {state.ingredients[item]}
    </li>
  ));

  const modalCloseHandler = () => {
    setModal(false);
  };

  return (
    <>
      {
        <Modal show={modal} closeModal={modalCloseHandler}>
          <p>Your Order: </p>
          <ul>{ingredientSummary}</ul>
        </Modal>
      }
      <Burger ingredients={state.ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disableButton={disableButton}
        totalPrice={totalPrice}
        purchase={purchase}
        orderHandler={orderHandler}
      />
    </>
  );
};

export default BurgerBuilder;