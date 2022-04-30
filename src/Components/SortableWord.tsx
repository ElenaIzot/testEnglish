import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import styled from "styled-components";

interface Props {
  text: string;
}

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

const SortableWord: React.FC<Props> = ({ text }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: text });

  return (
    <Word ref={setNodeRef} {...attributes} {...listeners}>
      {text}
    </Word>
  );};

export default SortableWord;