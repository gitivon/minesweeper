import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

export interface IPointProps {
  count: number;
  hide: boolean;
  onClick?: (status: boolean) => void;
}

export const Point: FunctionComponent<IPointProps> = ({ count, hide, onClick }) => {
  const [ hasView, view ] = useState(false);
  const changeView = () => {
    // onClick && onClick(true);
    view(true)
  }
  useEffect(() => view(false), [hide]);
  return (
    <StyledPoint
      hasView={hasView}
      onClick={changeView}
      hasMine={count === -1}
    >
      {hasView ? (count === -1 ? '*' : count) : null}
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
