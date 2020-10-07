import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from './SideDrawer.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = ({ open,closed }) => {
    return (
        <>
            <Backdrop show={open} clicked={closed}/>
            <div className={clsx(classes.SideDrawer, {
                [classes.Open]: open,
                [classes.Close]: !open
            })}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    )
}

SideDrawer.propTypes = {
    open: PropTypes.bool,
    closed: PropTypes.func
}

export default SideDrawer;  