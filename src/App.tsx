import * as React from 'react';
import styled from 'styled-components';
import { Stage } from './components/Stage';

const App: React.FunctionComponent = () => {
  const size = {
    x: 15,
    y: 10,
  };
  const [game, newGame] = React.useState(0);
  const restart = () => newGame(game + 1);
  return <StyledApp>
    <Stage size={size} count={30} restart={game} />
    <Button onClick={restart}>重新开始({game})</Button>
  </StyledApp>;
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
const Button = styled.button`
  margin-top: 15px;
`;
