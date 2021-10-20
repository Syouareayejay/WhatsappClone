import React, { createContext, useContext, useReducer } from "react";

// context object
export const StateContext = createContext();

// provider
export const StateProvider = ({reducer,initialState,children}) => {
    return(<StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>);
}

// consumer
export const useStateValue = () => useContext(StateContext);