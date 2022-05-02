import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
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
  width: 85px;
  height: 32px;
  padding: 4px 5px;
  cursor: grab;
`;

const SortableWord: React.FC<Props> = ({ text }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: text });

  const style = {
    display: 'inline-block',
    opacity: isDragging ? 0.5 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <>
      {(text !== '') && <Word className='SortableWord' ref={setNodeRef} style={style} {...attributes} {...listeners} >
        {text}
      </Word>}
    </>
  );
};

export default SortableWord;