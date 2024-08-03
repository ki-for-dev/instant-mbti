import React from "react";
import { labelSet, MbtiCategory } from "../MbtiCategory";
function QuestionPanelChoice(props: {
  category: MbtiCategory;
  choiceNumber: 1 | 2;
  onChoose: (choiceNumber: 1 | 2) => void;
}) {
  const _choice = props.choiceNumber === 1 ? "choice1" : "choice2";
  const cate = props.category;

  const onClickChoose = () => {
    props.onChoose(props.choiceNumber);
  };

  return (
    <div className="border-l-4 border-slate-500 pl-2">
      <div>
        <div>
          <span className="font-bold text-2xl mr-2">
            {labelSet[cate][_choice].alpha}
          </span>
          <span className="font-bold text-xl">
            {labelSet[cate][_choice].title.jp}
          </span>
          <span className="text-gray-500">
            {" "}
            {labelSet[cate][_choice].title.eng}
          </span>
        </div>
        <div className="mt-4 mb-2 pl-2">
          <span>
            <span>{labelSet[cate][_choice].note}</span>
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="border border-gray-400 rounded-md px-4 active:bg-gray-400"
          onClick={onClickChoose}
        >
          こっち
        </button>
      </div>
    </div>
  );
}

export default QuestionPanelChoice;
