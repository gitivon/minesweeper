import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

export interface IPointProps {
  count: number;
}

export const Point: FunctionComponent<IPointProps> = ({ count }) => {
  const [ hasView, view ] = useState(true);
  const changeView = () => view(true)
  return (
    <StyledPoint
      hasView={hasView}
      onClick={changeView}
      hasMine={count === -1}
    >
      {count === -1 ? '*' : count}
    </StyledPoint>
  );
}

interface IStyledPoint {
  hasView: boolean;
  hasMine: boolean;
}

const StyledPoint = styled.div<IStyledPoint>`
  cursor: default;
  border: .5px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.hasView ? (
    props.hasMine ? 'red' : 'khaki' 
  ) : ''}
`
