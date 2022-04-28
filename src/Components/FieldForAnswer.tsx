import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Typography, Image } from 'antd';

const FieldAnswer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`;

const FieldForAnswer = () => {
  const { Text } = Typography;

  return (
    <FieldAnswer>
      <Text style={{ height: '40px', borderBottom: '1px solid #4B4B4B' }}></Text>
      <Text style={{ height: '40px', borderBottom: '1px solid #4B4B4B' }}></Text>
      <Text style={{ height: '40px', borderBottom: '1px solid #4B4B4B' }}></Text>
    </FieldAnswer>
  );
}

export default FieldForAnswer;
