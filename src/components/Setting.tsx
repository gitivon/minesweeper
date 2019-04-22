import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import { useStore } from "../hooks/useStore";
import { ActionTypes } from "../reducer";

export const Setting: FunctionComponent = props => {
  const [state, dispatch] = useStore();
  const [x, setX] = useState(() => state.stage.x);
  const [y, setY] = useState(() => state.stage.y);
  const [count, setCount] = useState(() => state.stage.count);
  const submit = () =>
    dispatch({
      payload: {
        count,
        x,
        y
      },
      type: ActionTypes.SET_STAGE_SIZE
    });
  return (
    <StyledSetting>
      <Input label="x" value={x} onChange={setX} />
      <Input label="y" value={y} onChange={setY} />
      <Input label="count" value={count} onChange={setCount} />
      <Button onClick={submit}>重新开始</Button>
      当前第<code>{state.gameTimes}</code>局
    </StyledSetting>
  );
};

interface IInputProps {
  value: number;
  label: string;
  onChange: (value: number) => void;
}

const Input: React.FunctionComponent<IInputProps> = props => {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.target.value, 10);
    props.onChange(v || 0);
  };
  return (
    <Label>
      {props.label}
      <input type="number" value={props.value} onChange={change} />
    </Label>
  );
};

const Label = styled.label`
  input {
    margin: 0 5px;
    width: 30px;
  }
`;

const StyledSetting = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;
const Button = styled.button``;
