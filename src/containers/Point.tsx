import React, { FunctionComponent, useState, useEffect } from "react";
import { useStore } from "../hooks/useStore";
import { Point, IPointProps } from "../components/Point";

export type IWrappedPoint = Others<IPointProps, "hide">;

export const WrappedPoint: FunctionComponent<IWrappedPoint> = props => {
  const [state] = useStore();
  const [hide, setHide] = useState(false);
  useEffect(() => setHide(!hide), [hide, state.gameTimes]);
  // usePoint(hide);
  useEffect(() => {
    console.log(hide)
  }, [hide])
  return (
    <Point
      hide={hide}
      {...props}
    />
  );
}
