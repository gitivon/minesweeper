import React, { FunctionComponent, useState, useEffect } from 'react';
import { useStore } from 'src/hooks/useStore';
import { Point, IPointProps } from 'src/components/Point';

type IWrappedPoint = Pick<IPointProps, 'count'>

export const WrappedPoint: FunctionComponent<IWrappedPoint> = (props) => {
  const [state] = useStore();
  const [hide, setHide] = useState(false);
  useEffect(() => setHide(!hide), [state.gameTimes]);
  return (
    <Point
      count={props.count}
      hide={hide}
    />
  );
}