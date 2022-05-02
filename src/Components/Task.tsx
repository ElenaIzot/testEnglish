import React from 'react';
import styled from 'styled-components';
import { Image } from 'antd';

import userIcon from '../assets/userIcon.png';

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
  font-size: 22px;
  font-weight: 400;
  text-align: left;
  text-decoration: underline dashed 1px;
`;

const CloudStyle = styled.div`
	position: relative;
	width: 300px;
	text-align: center;
	margin: 0 20px 70px;
	border: 3px solid #333;
	border-radius: 30px;
	font-family: sans-serif;
	padding: 20px;

  :before,
  :after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
  }

  :before {
    left: 30px;
    bottom: -43px;
    border: 21px solid;
    border-color: #333 transparent transparent #333;
  }

  :after {
    left: 33px;
    bottom: -35px;
    border: 21px solid;
    border-color: #F5F5F5 transparent transparent #F5F5F5;
  }
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
        src={userIcon}
        alt='user'
      />
      <CloudStyle className="bubble speech">
        <CloudWithText>
          {text.phraseOnRussian}
        </CloudWithText>
      </CloudStyle>
    </Task>
  );
}

export default TaskComponent;
