import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Stage } from 'src/components/Stage';
import { useStore } from 'src/hooks/useStore';
import { useMine } from 'src/hooks/mine';

export const WrappedStage: FunctionComponent = (props) => {
  const [state] = useStore();
  const { x, y, count } = state.stage;
  const size = { x, y }
  const [mines, frush] = useMine(size, count);
  useEffect(frush, [state.gameTimes]);
  return (
    <Stage
      mines={mines}
      count={state.stage.count}
      size={size}
      {...props}
    />
  );
}