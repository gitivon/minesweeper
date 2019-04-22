import React, { FunctionComponent, useState, useEffect } from 'react';
import { useStore } from 'src/hooks/useStore';
import { Point, IPointProps } from 'src/components/Point';
import { usePoint } from 'src/hooks/point';

export type IWrappedPoint = Others<IPointProps, 'hide'>

export const WrappedPoint: FunctionComponent<IWrappedPoint> = (props) => {
  const [state] = useStore();
  const [hide, setHide] = useState(false);
  useEffect(() => setHide(!hide), [state.gameTimes]);
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