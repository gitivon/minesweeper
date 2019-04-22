import React, { FunctionComponent, useReducer, ReducerState, Reducer } from 'react';
import { StateContext, DispatchContext } from 'src/reducer';

interface IProviderProps<R extends Reducer<any, any>> {
  reducer: R;
  initialState: ReducerState<R>;
}

export const Provider: FunctionComponent<IProviderProps<Reducer<any, any>>> = (props) => {
  const [ state, dispatch ] = useReducer(props.reducer, props.initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}