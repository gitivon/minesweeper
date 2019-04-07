import React, { FunctionComponent, useEffect } from 'react';
import { Stage } from 'src/components/Stage';
import { useStore } from 'src/hooks/useStore';
import { useMine } from 'src/hooks/mine';

export const WrappedStage: FunctionComponent = (props) => {
  const [state] = useStore();
  const { x, y, count } = state.stage;
  const size = { x, y }
  const [mines, frush] = useMine(size, count);
  useEffect(frush, [state.gameTimes]);
  const click = (index: number) => {
    alert(index);
  }
  return (
    <Stage
      mines={mines}
      size={size}
      onClick={click}
      {...props}
    />
  );
}