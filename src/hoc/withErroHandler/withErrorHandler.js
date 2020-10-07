import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from '../../axios-order';

import Modal from '../../components/UI/Modal/Modal';

// Global error handling
const withErrorHandler = (Component) => ((props) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.interceptors.request.use(req => { 
            setError(null) 
            return req
        })
        axios.interceptors.response.use(res => res, error => {
            setError(error)
        })
    }, [])

    const errorCloseHandler = () => {
        setError(null)
    } 

    return (
        <>
            <Modal show={error} closeModal={errorCloseHandler}>
                {error ? error.message : null}
            </Modal>
            <Component {...props} />
        </>
    );
})

withErrorHandler.propTypes = {
    Component: PropTypes.node
}

export default withErrorHandler;