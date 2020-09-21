import React, { createContext } from 'react';

const burgerContext = createContext(initialState);
const { Provider } = burgerContext;

const StateProvider = ({ children, value }) => {   
    return <Provider value={ value}>{children}</Provider>;
}

export { StateProvider };

export default burgerContext;