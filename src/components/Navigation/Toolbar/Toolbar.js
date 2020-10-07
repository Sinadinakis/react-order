import React from 'react';
import PropTypes from 'prop-types';
// CSS
import classes from './Toolbar.css';

// Components
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton'

const Toolbar = ({ handleToggleSideDrawer }) => (
    <header className={classes.Toolbar}>
        <ToggleButton clicked={handleToggleSideDrawer}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems /> 
        </nav>
    </header>
);

Toolbar.propTypes = {
    handleToggleSideDrawer: PropTypes.func
}

export default Toolbar;