import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { useMine, IStageSize } from '../hooks/mine';
import { Point } from './Point';

interface IStageProps {
  size: IStageSize;
  count: number;
  restart?: any;
}

export const Stage: FunctionComponent<IStageProps> = ({ size, count, restart }) => {
  const [mines, frush] = useMine(size, count);
  useEffect(frush, [restart]);
  return (
    <StyledStage {...size}>
      {mines.map((box, x) => 
        box.map((mineCount, y) => 
          <Point
            count={mineCount}
            key={`${x}-${y}`}
          />
        )
      )}
    </StyledStage>
  );
}

const baseSize = 20;
const StyledStage = styled.div<IStageSize>`
  display: grid;
  grid-template-rows: repeat(${props => props.y}, ${baseSize}px);
  grid-template-columns: repeat(${props => props.x}, ${baseSize}px);
`;
