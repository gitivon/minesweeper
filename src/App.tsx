import React, { FunctionComponent, useReducer } from 'react';
import styled from 'styled-components';
import { Provider } from './containers/Provider';
import { WrappedStage } from './containers/Stage';
import { Setting } from './components/Setting';
import { reducer, initialState } from './reducer';

const App: FunctionComponent = () => {
  return (
    <Provider reducer={reducer} initialState={initialState}>
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