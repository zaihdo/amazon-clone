// Setup data layer (global state)
// To track the basket and user

import React from 'react';
import { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);