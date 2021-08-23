import React ,{createContext, useContext, useReducer} from "react";

//prepairs the dtatlayer
export const StateContext = createContext();

//wrap our layer and provide data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider> 
);

//pull information from data layer
export const UseStateValue =() => useContext(StateContext);

  
