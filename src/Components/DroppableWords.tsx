import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import SortableWord from "./SortableWord";

interface Props {
  id: string;
  items: string[];
}

const DroppableWords: React.FC<Props> = ({ id, items }) => {
  const { setNodeRef } = useDroppable({ id });

  const droppableStyle = {
    padding: "20px 10px",
    borderBottom: "1px solid black",
    borderRadius: "5px",
    minWidth: 110
  };

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <div ref={setNodeRef} style={droppableStyle}>
        {items.map((item: string) => (
          <SortableWord text={item} />
        ))}
      </div>
    </SortableContext>
  );
};

export default DroppableWords;
