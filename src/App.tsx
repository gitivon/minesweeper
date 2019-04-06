import * as React from 'react';
import styled from 'styled-components';
import { Stage, IStageProps } from './components/Stage';

const initialStage = {
  count: 40,
  size: {
    x: 16,
    y: 16,
  },
}

const App: React.FunctionComponent = () => {
  const [size, setSize] = React.useState(initialStage.size);
  const [game, newGame] = React.useState(0);
  const [count, setCount] = React.useState(initialStage.count);
  const [stage, setStage] = React.useState<IStageProps>(initialStage);
  const change = (type: string) => (val: number) => {
    setSize({
      ...size,
      [type]: val,
    })
  }
  const restart = () => {
    setStage({
      count,
      size,
    });
    newGame(game + 1)
  };
  return <StyledApp>
    <Stage size={stage.size} count={stage.count} restart={game} />
    <Setting>
      <Input label="x" value={size.x} onChange={change('x')} />
      <Input label="y" value={size.y} onChange={change('y')} />
      <Input label="count" value={count} onChange={setCount} />
      <Button onClick={restart}>重新开始({game})</Button>
    </Setting>
  </StyledApp>;
}

interface IInputProps {
  value: number;
  label: string;
  onChange: (value: number) => void;
}
const Input: React.FunctionComponent<IInputProps> = (props) => {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.target.value, 10);
    props.onChange(v || 0);
  }
  return (
    <Label>
      {props.label} {props.value}
      <input type="number" value={props.value} onChange={change} />
    </Label>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Label = styled.label`
  input {
    margin: 0 5px;
    width: 30px;
  }
`;
const Setting = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;
const Button = styled.button`
`;
