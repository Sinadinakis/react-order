import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'; 

// CSS
import classes from './NavigationLink.css'

const NavigationLink = ({ link, active, children}) => (
    <li
        className={clsx(classes.NavigationLink,
            { [classes.active]: active }
        )}
    >
        <a href={link}>{children}</a>
    </li>
)

NavigationLink.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    link: PropTypes.string,
}

export default NavigationLink;