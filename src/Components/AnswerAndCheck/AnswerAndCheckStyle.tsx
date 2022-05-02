import React from "react";
import styled from 'styled-components';

export const ButtonCheck = styled.button`
  width: 470px;
  height: 68px;
  background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
  box-shadow: -2px -4px 12px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #C9C9C9;
  border-radius: 88px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background: linear-gradient(91.2deg, #FFFFFF 0%, #c7bcbc 100%);
  }
`;

export const FieldForAnswer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`;

export const WrongAnswer = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #FF0000;
  margin-bottom: 50px;
`;

export const CorrectedAnswer = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #10C504;
  margin-bottom: 50px;
`;