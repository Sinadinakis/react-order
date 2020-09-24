import React, { createContext } from "react";
import PropTypes from 'prop-types';

const initialState = {}

const burgerContext = createContext(initialState);
const { Provider } = burgerContext;

const StateProvider = ({ children, value }) => {
  return <Provider value={value}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any
}

export { StateProvider };

export default burgerContext;
