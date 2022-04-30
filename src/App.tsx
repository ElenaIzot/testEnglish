import React, { useState } from "react";
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Typography } from 'antd';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import DroppableWords from "./Components/DroppableWords";
import { removeAtIndex, insertAtIndex } from "./modules/modules";

import TaskComponent from './Components/Task';
import { phraseForTranslate } from './data/dataApp';

export interface WordsForAnswer {
  root: string[];
  containerForAnswer1: string[];
  containerForAnswer2: string[];
  containerForAnswer3: string[];
}

const AppWrapper = styled.div`
  width: 600px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonCheck = styled.button`
  width: 470px;
  height: 68px;
  background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
  box-shadow: -2px -4px 12px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #C9C9C9;
  border-radius: 88px;
  cursor: pointer;
`;

const FieldForAnswer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  height:300px;
`;

export default function App() {
  const { Title } = Typography;

  const initState: WordsForAnswer = {
    containerForAnswer1: [],
    containerForAnswer2: [],
    containerForAnswer3: [],
    root: ['I', 'think', 'he', 'made', 'the', 'right', 'choice', 'does', 'make', 'do', 'left'],
  }

  const [items, setItems] = useState<WordsForAnswer>(initState);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragOver = (event: any) => {
    const { active, over } = event;

    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId;

    if (!overContainer) {
      return;
    }

    if (activeContainer !== overContainer) {
      setItems((items) => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex = over.data.current?.sortable.index || 0;

        return moveBetweenContainers(
          items,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id
        );
      });
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current.sortable.index;
      const overIndex = over.data.current?.sortable.index || 0;

      setItems((items) => {
        let newItems;
        if (activeContainer === overContainer) {
          newItems = {
            ...items,
            [overContainer]: arrayMove(
              items[overContainer],
              activeIndex,
              overIndex
            )
          };
        } else {
          newItems = moveBetweenContainers(
            items,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
          );
        }

        return newItems;
      });
    }
  };

  const moveBetweenContainers = (
    items: { [x: string]: any; root?: string[]; containerForAnswer?: string[]; },
    activeContainer: string | number,
    activeIndex: any,
    overContainer: string | number,
    overIndex: any,
    item: any
  ) => {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item)
    };
  };

  return (
    <AppWrapper>
      <Title level={2}>Translate this sentence</Title>
      <TaskComponent text={phraseForTranslate} />
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <FieldForAnswer>
          {Object.keys(items).map((group) => (
            <DroppableWords id={group} items={items[group]} key={group} />
          ))}
        </FieldForAnswer>
      </DndContext>
      <ButtonCheck>
        Check
      </ButtonCheck>
    </AppWrapper >
  );
}
