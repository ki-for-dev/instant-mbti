import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PadDiv from "../components/PadDiv";
import TypeCircle from "../components/TypeCircle";
import QuestionPanel from "../components/QuestionPanel";
import { labelSet, MbtiCategory } from "../MbtiCategory";
import ResultPanel from "../components/ResultPanel";

const IndexPage: React.FC<PageProps> = () => {
  const [currentCategory, setCurrentCategory] =
    React.useState<MbtiCategory | null>("energy");

  const [cate1Choice, setCate1Choice] = React.useState<1 | 2 | null>(null);
  const [cate2Choice, setCate2Choice] = React.useState<1 | 2 | null>(null);
  const [cate3Choice, setCate3Choice] = React.useState<1 | 2 | null>(null);
  const [cate4Choice, setCate4Choice] = React.useState<1 | 2 | null>(null);

  const onChoose = (choiceNumber: 1 | 2) => {
    switch (currentCategory) {
      case "energy":
        setCate1Choice(choiceNumber);
        setCurrentCategory("mind");
        break;
      case "mind":
        setCate2Choice(choiceNumber);
        setCurrentCategory("nature");
        break;
      case "nature":
        setCate3Choice(choiceNumber);
        setCurrentCategory("tactics");
        break;
      case "tactics":
        setCate4Choice(choiceNumber);
        setCurrentCategory(null);
        break;
    }
  };

  const onRetry = () => {
    setCurrentCategory("energy");
    setCate1Choice(null);
    setCate2Choice(null);
    setCate3Choice(null);
    setCate4Choice(null);
  };

  const isEnd = () => {
    return (
      cate1Choice !== null &&
      cate2Choice !== null &&
      cate3Choice !== null &&
      cate4Choice !== null
    );
  };

  const numToChoice = (num: 1 | 2) => {
    return num === 1 ? "choice1" : "choice2";
  };
  const resultPersonal = () => {
    if (
      cate1Choice !== null &&
      cate2Choice !== null &&
      cate3Choice !== null &&
      cate4Choice !== null
    ) {
      let result = "";
      result += labelSet.energy[numToChoice(cate1Choice)].alpha;
      result += labelSet.mind[numToChoice(cate2Choice)].alpha;
      result += labelSet.nature[numToChoice(cate3Choice)].alpha;
      result += labelSet.tactics[numToChoice(cate4Choice)].alpha;
      return result;
    } else {
      return "";
    }
  };

  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b border-b-slate-400 h-14 flex items-center justify-center">
        <div>
          <span className="text-2xl">インスタント MBTI</span>
        </div>
      </header>
      <main className="bg-stone-100 flex justify-center grow">
        {/* イントロ */}
        <div className="w-full md:w-[48rem] bg-white">
          <PadDiv>
            <h1 className="text-lg">MBTIを聞かれるのうんざりしてませんか？</h1>
          </PadDiv>
          <PadDiv>
            <div className="pl-2">
              <div className="mb-2">
                <i className="material-icons md-18 pr-1">check</i>
                <span>MBTIにそこまで興味がない</span>
              </div>
              <div className="mb-2">
                <i className="material-icons md-18 pr-1">check</i>
                <span>わざわざ診断したくない</span>
              </div>
              <div className="mb-2">
                <i className="material-icons md-18 pr-1">check</i>
                <span>けどしつこいから答えだけ持っておきたい</span>
              </div>
            </div>
          </PadDiv>
          <PadDiv>
            <p>そんな人のためのサイトです。</p>
          </PadDiv>
          <PadDiv>
            <h1 className="text-gray-700 text-2xl font-bold border-b text-center">
              自分のMBTIを決める
            </h1>
          </PadDiv>
          <h1 className=""></h1>
          <div className="flex justify-center items-center">
            <div className="flex flex-row justify-between w-72 md:w-[32rem]">
              <TypeCircle
                category="energy"
                choose={cate1Choice}
                active={currentCategory === "energy" || isEnd()}
              ></TypeCircle>
              <TypeCircle
                category="mind"
                choose={cate2Choice}
                active={currentCategory === "mind" || isEnd()}
              ></TypeCircle>
              <TypeCircle
                category="nature"
                choose={cate3Choice}
                active={currentCategory === "nature" || isEnd()}
              ></TypeCircle>
              <TypeCircle
                category="tactics"
                choose={cate4Choice}
                active={currentCategory === "tactics" || isEnd()}
              ></TypeCircle>
            </div>
          </div>

          <div>
            <PadDiv>
              <QuestionPanel
                category={currentCategory}
                onChoose={onChoose}
              ></QuestionPanel>
            </PadDiv>

            <PadDiv>
              <ResultPanel isEnd={isEnd()} result={resultPersonal()} />
            </PadDiv>

            <PadDiv>
              <div className="flex justify-center items-center">
                <button
                  className="border border-gray-400 rounded-md px-4 active:bg-gray-400"
                  onClick={onRetry}
                >
                  やりなおす
                </button>
              </div>
            </PadDiv>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>

    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </>
);
