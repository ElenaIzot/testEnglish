import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Typography, Image } from 'antd';
import './cloud.css';

import * as T from '../modules/modules';

const Task = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: center;
  margin-bottom: 50px;
`;

const CloudWithText = styled.div`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  text-align: left;
`;

interface Props {
  text: T.PhraseForTranslate,
}

const TaskComponent: React.FC<Props> = ({ text }) => {

  return (
    <Task>
      <Image
        width={'200px'}
        preview={false}
        src={'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_960_720.png'}
        alt='user'
      />
      <div className="bubble speech">
        <CloudWithText>
          {text.phraseOnRussian}
        </CloudWithText>
      </div>
    </Task>
  );
}

export default TaskComponent;
