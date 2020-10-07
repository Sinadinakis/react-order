import React, { useState } from "react";
import axios from '../axios-order';

// Components
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import IngredientSummary from "../components/Burger/IngredientSummary/IngredientSummary";
import Spinner from '../components/UI/Spinner/Spinner';
import withErrorHandler from '../hoc/withErroHandler/withErrorHandler';

// UI
import Modal from "../components/UI/Modal/Modal";
import Button from "../components/UI/Button/Button";

const INGREDIENT_PRICES = {
    salad: 1.5,
    cheese: 1.5,
    meat: 4.5,
    bacon: 2.25,
};

const INITIAL_STATE = {
    ingredients: {
        bacon: 2,
        salad: 0,
        meat: 0,
        cheese: 0,
    },
};

const BurgerBuilder = () => {
    const [state, setState] = useState(INITIAL_STATE);
    const [totalPrice, setTotalPrice] = useState(5);
    const [purchase, setPurchase] = useState(false);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);

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
        const purchaseDisable = sum > 0;
        setPurchase(purchaseDisable);
    };

    const modalOpenHandler = () => setModal(true);
    const modalCloseHandler = () => setModal(false);

    const purchaseContinueHandler = () => {
        setLoading(true);
        const order = {
            ingredients: state.ingredients,
            price: totalPrice,
            customer: {
                name: 'Manolis',
                email: 'test@gmail.com'
            },
            deliverMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(res => { 
                setLoading(false) 
                setModal(false)
            })
            .catch(error => {
                setLoading(false)
                setModal(false)
            })
    }

    return (
        <>
            <Modal show={modal} closeModal={modalCloseHandler}>
                {!loading ? (
                    <>
                        <p>Your Ingredient Summart: </p>
                        <IngredientSummary ingredients={state.ingredients} totalPrice={totalPrice} />
                        <p>Continue to Checkout</p>
                        <Button btnType="secondary" onClick={modalCloseHandler}>Cancel</Button>
                        <Button btnState="success" onClick={purchaseContinueHandler}>CONTINUE</Button>
                    </>)
                    : <Spinner />}
            </Modal>
            <Burger ingredients={state.ingredients} />
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disableButton={disableButton}
                totalPrice={totalPrice}
                purchase={purchase}
                orderHandler={modalOpenHandler}
            />
        </>
    );
};

export default withErrorHandler(BurgerBuilder);