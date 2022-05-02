import React, { useState } from "react";
import 'antd/dist/antd.css';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import DroppableWords from "../DroppableWords";
import { phraseForTranslate, wordsForAnswer } from "../../data/dataApp";
import { removeAtIndex, insertAtIndex } from "../../modules/modules";
import { FieldForAnswer, CorrectedAnswer, WrongAnswer, ButtonCheck } from "./AnswerAndCheckStyle";

import * as T from '../../modules/modules'

const AnswerAndCheck = () => {
  const [items, setItems] = useState<T.WordsForAnswer>(wordsForAnswer);
  const [resultOfChecking, setResultOfChecking] = useState<boolean | undefined>(undefined);

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
    items: T.WordsForAnswer,
    activeContainer: string,
    activeIndex: number,
    overContainer: string,
    overIndex: number,
    item: string,
  ) => {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item)
    };
  };

  const handleCheckAnswer = (items: T.WordsForAnswer) => {
    const wordsForAnswer = Object.assign({}, items);
    delete wordsForAnswer.root;

    const answerForCheck: string[] = [];

    Object.keys(wordsForAnswer).forEach((key) => {
      if (wordsForAnswer[key].length !== 0) {
        wordsForAnswer[key].map(word => {
          answerForCheck.push(word);
        })
      }
    });

    if (answerForCheck.join(' ') === phraseForTranslate.phraseOnEnglish) {
      setResultOfChecking(true)
    } else {
      setResultOfChecking(false)
    }
  }

  return (
    <>
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
      {resultOfChecking === undefined ?
        undefined : resultOfChecking ?
          <CorrectedAnswer>CORRECT</CorrectedAnswer>
          : <WrongAnswer>Something wrong!</WrongAnswer>
      }
      <ButtonCheck onClick={() => handleCheckAnswer(items)}>
        Check
      </ButtonCheck>
    </>
  );
}

export default AnswerAndCheck;