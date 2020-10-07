import React from 'react';
// CSS
import classes from './NavigationItems.css';

// Components
import NavigationLink from './NavigationLink/NavigationLink';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
       <NavigationLink link="/" active>Burger</NavigationLink>
       <NavigationLink link="/">Check Out</NavigationLink>
    </ul>
);


export default NavigationItems;