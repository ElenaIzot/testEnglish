import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Typography } from 'antd';
import { Button } from 'antd';

import TaskComponent from './Components/Task';

const AppWrapper = styled.div`
  border: 2px solid black;
  width: 600px;
  min-height: 100vh;
  margin: auto;
`;

function App() {
  const { Title } = Typography;

  return (
    <AppWrapper>
      <Title level={2}>   Translate this sentence</Title>
      <TaskComponent />
      <Button>
        Check
      </Button>
    </AppWrapper>

  );
}

export default App;
