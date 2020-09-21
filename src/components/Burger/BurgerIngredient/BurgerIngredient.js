import React from 'react';

import classes from './BurgerIngredient.css'

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient =
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            break;
        case ('meat'):
            ingredient =
                <div className={classes.Meat}></div>
            break;
        case ('cheese'):
            ingredient =
                <div className={classes.Cheese}></div>
            break;
        case ('bacon'):
            ingredient =
                <div className={classes.Bacon}>
                    <div className={classes.red}></div>
                    <div className={classes.white}></div>
                    <div className={classes.red}></div>
                    <div className={classes.bubble1}></div>
                    <div className={classes.bubble2}></div>
                </div>
            break;
        case ('salad'):
            ingredient =
                <div className={classes.Salad}></div>
            break;
        default:
            ingredient = null;

    }

    return ingredient;
}

export default BurgerIngredient;