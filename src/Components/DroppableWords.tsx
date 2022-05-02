import React from "react";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import styled from "styled-components";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import SortableWord from "./SortableWord";

interface Props {
  id: string;
  items: string[];
}

const DroppableWord = styled.div`
  padding: 0px 10px;
  border-bottom: 1px solid black;
  padding-top: 5px;
  min-width: 110px;
  min-height: 60px;

  :first-child {
    margin-top: 20px;
    border-top: 1px solid black;
  }

  :last-child {
    margin-top: 20px;
    border-bottom: none;
  }
`;

const DroppableWords: React.FC<Props> = ({ id, items }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <DroppableWord ref={setNodeRef} key={id}>
           {items.map((item: string) => (
          <SortableWord text={item} />
        ))}
      </DroppableWord>
    </SortableContext>
  );
};

export default DroppableWords;
