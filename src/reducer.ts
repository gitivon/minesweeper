import { Reducer, createContext } from "react";

export const initialState: IState = {
  gameTimes: 0,
  stage: {
    count: 10,
    x: 16,
    y: 16
  },
  steps: []
};

interface IStageState {
  x: number;
  y: number;
  count: number;
}

interface IState {
  stage: IStageState;
  steps: number[];
  gameTimes: number;
}

interface IAction {
  type: ActionTypes;
  payload: any;
}

export enum ActionTypes {
  SET_STAGE_SIZE,
  CLICK_POINT,
  SET_FLAG
}

export type IuseStore = [IState, React.Dispatch<IAction>];

export const reducer: Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_STAGE_SIZE:
      return {
        ...state,
        gameTimes: state.gameTimes + 1,
        stage: action.payload
      };
    case ActionTypes.CLICK_POINT:
      return state;
    default:
      return state;
  }
};

export const StateContext = createContext(initialState);
export const DispatchContext = createContext((() => 0) as React.Dispatch<
  IAction
>);
