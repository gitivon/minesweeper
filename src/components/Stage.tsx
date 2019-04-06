import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useMine, IStageSize } from '../hooks/mine';
import { Point } from './Point';

export interface IStageProps {
  size: IStageSize;
  count: number;
  restart?: any;
}

export const Stage: FunctionComponent<IStageProps> = ({ size, count, restart }) => {
  const [mines, frush] = useMine(size, count);
  const [hide, setHide] = useState(false);
  useEffect(() => setHide(!hide), [restart]); // 点击重置按钮后先隐藏
  useEffect(frush, [hide]); // 隐藏之后再刷新雷区
  return (
    <StyledStage {...size}>
      {mines.map((box, x) => 
        box.map((mineCount, y) => 
          <Point
            count={mineCount}
            key={`${x}-${y}`}
            hide={hide}
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
