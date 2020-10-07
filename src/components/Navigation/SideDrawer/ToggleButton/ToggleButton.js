import React from 'react';
import PropTypes from 'prop-types';

import classes from './ToggleButton.css';

const ToggleButton = ({ clicked }) => ( 
    <div className={classes.ToggleButton}onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

ToggleButton.propTypes = {
    clicked: PropTypes.func
}

export default ToggleButton;