import React from "react";
import { useDroppable } from "@dnd-kit/core";
import styled from "styled-components";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import SortableWord from "./SortableWord";

import background from "../assets/background.jpg";

interface Props {
  id: string;
  items: string[];
}

const DroppableWrap = styled.div`
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
    min-height: 106px;
    border-bottom: none;
    background-image: url(${background});
    background-size: 98%;
    background-repeat: no-repeat;
    background-position-y: -6px;
    background-position-x: 1px;
  }
`;

const DroppableContainer: React.FC<Props> = ({ id, items }) => {
  const { setNodeRef } = useDroppable({ id });


  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <DroppableWrap ref={setNodeRef} key={id}>
        {items.map((item: string) => (
          <SortableWord text={item} />
        ))}
      </DroppableWrap>
    </SortableContext>
  );
};

export default DroppableContainer;
