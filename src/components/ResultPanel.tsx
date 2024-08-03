import React from "react";

function ResultPanel(props: { isEnd: boolean; result: string }) {
  if (props.isEnd) {
    return (
      <div className="flex flex-col justify-center items-center">
        <span>あなたが決めた、あなたのMBTI診断は</span>
        <div className="pt-4">
          <span className="text-4xl font-bold">{props.result}</span>
        </div>
        <div className="pt-4">
          <span className="text-gray-500">
            ※ちゃんと診断した結果ではないので
            <br />「{props.result}っぽい」とか言うようにしましょう
          </span>
        </div>
        <div className="pt-8">
          {props.result}の詳しい解説はこちら
          <a
            target="_blank"
            className="text-blue-400 underline"
            href={
              "https://www.16personalities.com/" +
              props.result.toLowerCase() +
              "-personality"
            }
          >
            {"https://www.16personalities.com/" +
              props.result.toLowerCase() +
              "-personality"}
          </a>
        </div>
      </div>
    );
  } else {
    <></>;
  }
}

export default ResultPanel;
