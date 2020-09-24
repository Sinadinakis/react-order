import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import classes from './Button.css';

// Styles
const styles = {
    primary: classes.Primary,
    secondary: classes.Secondary,
    success: classes.Success,
    danger: classes.Danger,
  };

const Button = ({ btnType, btnState, onClick, children }) => (
    <button 
        className={clsx(classes.Button, {
            [styles[btnState]]: btnState,
            [styles[btnType]]: btnType

        })} 
        onClick={onClick}
    >
        {children}
    </button>
);

Button.defaultProps = {
    btnType: 'primary'
}

Button.propTypes = {
    btnState: PropTypes.string,
    btnType: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;