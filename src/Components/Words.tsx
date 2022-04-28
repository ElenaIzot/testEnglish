import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useDraggable } from '@dnd-kit/core';
import { Typography, Image, Button } from 'antd';

const ContainerForWords = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px;
  justify-content: flex-start;
`;

const Word = styled.button`
  background: #FFFFFF;
  border: 1px solid #C9C9C9;
  box-shadow: 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  margin: 5px;
  height: auto;
  padding: 4px 18px;
`

const EmptyWord = styled.button`
  background: #E6E6E6;
  box-shadow: inset 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  border: 1px solid #C9C9C9;
  border-radius: 13px;
  margin: 5px;
  height: 32px;
  width: 70px;
  padding: 4px 18px;
`

const Words = () => {
  const arrayWords = [
    'word1',
    'word1',
    'word1',
    'word1',
    'word1',
    'word1',
    'word1',
    'word1',
    'word1',
    'word1',
    '',
    '',
  ]

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: '2323',
  });

  const style = transform ? {

    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <ContainerForWords>
      {arrayWords.map((word, index) => {
        if (!!word.length) {
          return <Word
            ref={setNodeRef}
            key={index}
            style={style}
            tabIndex={index}
            {...listeners}
          >
            {word}
          </Word >
        } else {
          return <EmptyWord key={index} />
        }
      })}
    </ContainerForWords>
  );
}

export default Words;
