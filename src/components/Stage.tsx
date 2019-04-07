import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { IStageSize, IMines } from '../hooks/mine';
import { WrappedPoint } from 'src/containers/Point';

export interface IStageProps {
  mines: IMines;
  size: IStageSize;
  count: number;
  restart?: any;
}

export const Stage: FunctionComponent<IStageProps> = (props) => {
  const { mines, size, count, restart } = props;
  return (
    <StyledStage {...size}>
      {mines.map((box, x) => 
        box.map((mineCount, y) => 
          <WrappedPoint
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
