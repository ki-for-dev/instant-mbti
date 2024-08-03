import React from "react";
import { labelSet, MbtiCategory } from "../MbtiCategory";
import { spawn } from "child_process";

function TypeCircle(props: {
  category: MbtiCategory;
  choose: number | null;
  active: boolean;
}) {
  let colorBorderClass = "border-gray-200";
  let colorTextClass = "text-gray-400";

  if (props.active) {
    colorBorderClass = "border-blue-500";
    colorTextClass = "text-blue-500";
  }

  const Alpha = () => {
    if (props.choose !== 1 && props.choose !== 2) {
      return (
        <i className={"material-icons " + colorTextClass}>question_mark</i>
      );
    } else {
      const _choose = props.choose === 1 ? "choice1" : "choice2";
      return (
        <span className={"font-bold text-xl " + colorTextClass}>
          {labelSet[props.category][_choose].alpha}
        </span>
      );
    }
  };
  return (
    <div
      className={
        "border rounded-full w-16 h-16 md:w-28 md:h-28 flex justify-center items-center " +
        colorBorderClass
      }
    >
      <span>{Alpha()}</span>
    </div>
  );
}

export default TypeCircle;
