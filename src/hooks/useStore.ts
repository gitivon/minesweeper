import React, { useContext } from "react";
import { StateContext, DispatchContext, IuseStore } from "../reducer";

export const useStore = (): IuseStore => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  return [state, dispatch];
};
