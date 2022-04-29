import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useDraggable } from '@dnd-kit/core';

import * as T from '../modules/modules';

const ContainerForWords = styled.div`
   display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: auto;
    align-content: space-between;
    margin-bottom: 50px;

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

interface Props {
  text: T.PhraseForTranslate,
  randomWords: T.RandomWord
}

const Words: React.FC<Props> = ({ text, randomWords }) => {
  const [wordsForDisplay, setWordsForDisplay] = useState<string[]>([]);

  const arrayWords = text.phraseOnEnglish.split(' ');
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: '2323',
  });

  const createListWordsForAnswer = (arrayWords: string[], randomWords: T.RandomWord) => {
    if (arrayWords.length < 12) {
      const count = 12 - (arrayWords.length + 1);
      const wordsForDisplay: string[] = [...arrayWords, ...randomWords.words.slice(0, count + 1)];
      setWordsForDisplay(wordsForDisplay);
    }
  }

  useEffect(() => {
    createListWordsForAnswer(arrayWords, randomWords)
  }, [text])

  const style = transform ? {

    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <ContainerForWords>
      {wordsForDisplay.map((word, index) => {
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
