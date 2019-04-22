import React, { FunctionComponent, useReducer, createContext } from "react";
import {
  initialState,
  reducer,
  StateContext,
  DispatchContext
} from "../reducer";

export const Provider: FunctionComponent = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
