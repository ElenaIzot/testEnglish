import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Typography, Image } from 'antd';
import './cloud.css';

const Task = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: center;
  margin-bottom: 50px;
`;

const CloudWithText = styled.div`
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
      {/* <CloudWithText>
        Текст для перевода
      </CloudWithText> */}

      <div id="reviews">
        <div className="speech">
          Текст для переводa
        </div>
      </div>
    </Task>
  );
}

export default TaskComponent;
