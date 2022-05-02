import React from "react";
import 'antd/dist/antd.css';
import styled from 'styled-components';

import TaskComponent from './Components/Task';
import { phraseForTranslate } from './data/dataApp';
import AnswerAndCheck from "./Components/AnswerAndCheck/AnswerAndCheck";

const AppWrapper = styled.div`
  width: 600px;
  min-height: 100vh;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-right: 200px;
  font-size: 36px;
  text-shadow: -2px -4px 3px #FFFFFF, 2px 4px 3px rgba(0, 0, 0, 0.25);
`

export default function App() {
  return (
    <AppWrapper>
      <Title>
        Translate this sentence
      </Title>
      <TaskComponent text={phraseForTranslate} />
      <AnswerAndCheck />
    </AppWrapper >
  );
}
