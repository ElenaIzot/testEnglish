import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Typography, Image } from 'antd';

const Task = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: center;
`;

const CloudWithText = styled.p`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  background-image: url(../assets/cloud.png);
`;

const TaskComponent = () => {
  const { Title, Text } = Typography;

  return (
    <Task>
      <Image
        width={'200px'}
        preview={false}
        src={'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_960_720.png'}
        alt='user'
      />
      <CloudWithText>
        Текст для перевода
      </CloudWithText>
    </Task>
  );
}

export default TaskComponent;
