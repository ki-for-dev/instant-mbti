import React from "react";
import { labelSet, MbtiCategory } from "../MbtiCategory";
import QuestionPanelChoice from "./QuestionPanelChoice";

function QuestionPanel(props: {
  category: MbtiCategory | null;
  onChoose: (choiceNumber: 1 | 2) => void;
}) {
  const onChoose = (choiceNumber: 1 | 2) => {
    props.onChoose(choiceNumber);
  };
  if (props.category === null) {
    return <></>;
  }
  return (
    <div className="w-full border border-slate-500 rounded-md p-2">
      <div className="mb-4">
        <div>
          <span className="text-2xl font-bold">
            {labelSet[props.category].title.jp}
          </span>
          <span className="text-gray-400 ml-2">
            {labelSet[props.category].title.eng}
          </span>
        </div>
        <div className="mt-2">
          <span>{labelSet[props.category].note}</span>
        </div>
      </div>

      {/* 選択肢 */}
      <div>
        <div className="mb-4">
          <QuestionPanelChoice
            category={props.category}
            choiceNumber={1}
            onChoose={onChoose}
          ></QuestionPanelChoice>
        </div>
        <div>
          <QuestionPanelChoice
            category={props.category}
            choiceNumber={2}
            onChoose={onChoose}
          ></QuestionPanelChoice>
        </div>
      </div>
    </div>
  );
}

export default QuestionPanel;
