import { Reducer, createContext } from 'react';

export const initialState = {
  gameTimes: 0,
  stage: {
    count: 40,
    x: 16,
    y: 16,
  },
}

interface IStageState {
  x: number;
  y: number;
  count: number;
}

interface IState {
  stage: IStageState;
  gameTimes: number;
}

interface IAction {
  type: ActionTypes;
  payload: any;
}

export const enum ActionTypes {
  SET_STAGE_SIZE,
}

export type IuseStore = [IState, React.Dispatch<IAction>];

export const reducer: Reducer<IState, IAction> = (state, action) => {
  switch(action.type) {
    case ActionTypes.SET_STAGE_SIZE:
      return {
        ...state,
        gameTimes: state.gameTimes + 1,
        stage: action.payload,
      };
    default:
      return state;
  }
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext((() => 0) as React.Dispatch<IAction>);
