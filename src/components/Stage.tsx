import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IStageSize, IMines } from "../hooks/mine";
import { WrappedPoint, IWrappedPoint } from "../containers/Point";

export interface IStageProps {
  mines: IMines;
  size: IStageSize;
  onClick: (index: number) => void;
}

export const Stage: FunctionComponent<
  IStageProps & Others<IWrappedPoint, "count" | "onClick">
> = props => {
  const { mines, size } = props;
  const click = (idx: number) => () => {
    props.onClick(idx);
  };
  let i = 0;
  return (
    <StyledStage {...size}>
      {mines.map((box, x) =>
        box.map((mineCount, y) => (
          <WrappedPoint
            count={mineCount}
            key={`${x}-${y}`}
            onClick={click(i++)}
          />
        ))
      )}
    </StyledStage>
  );
};

const baseSize = 20;
const StyledStage = styled.div<IStageSize>`
  display: grid;
  grid-template-rows: repeat(${props => props.y}, ${baseSize}px);
  grid-template-columns: repeat(${props => props.x}, ${baseSize}px);
`;
