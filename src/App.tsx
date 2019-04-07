import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Provider } from './containers/Provider';
import { WrappedStage } from './containers/Stage';
import { Setting } from './components/Setting';

const App: FunctionComponent = () => {
  return (
    <Provider>
      <StyledApp>
        <WrappedStage />
        <Setting />
      </StyledApp>
    </Provider>
  )
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