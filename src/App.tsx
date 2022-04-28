import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Typography } from 'antd';
import { DndContext } from '@dnd-kit/core';
import { Button } from 'antd';


import TaskComponent from './Components/Task';
import FieldForAnswer from './Components/FieldForAnswer';
import Words from './Components/Words';

const AppWrapper = styled.div`
  width: 600px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonCheck = styled.button`
  width: 470px;
  height: 68px;
  background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
  box-shadow: -2px -4px 12px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #C9C9C9;
  border-radius: 88px;
  cursor: pointer;
`;

const WindowTask = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const { Title } = Typography;

  return (
    <AppWrapper>
      <Title level={2}>   Translate this sentence</Title>
      <TaskComponent />

      <DndContext>
        <div>
          <FieldForAnswer />
          <Words />
        </div>

        {/* Draggable */}
      </DndContext>
      <ButtonCheck>
        Check
      </ButtonCheck>
    </AppWrapper >

  );
}

export default App;
