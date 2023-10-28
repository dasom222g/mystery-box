import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { useRecoilValue } from "recoil";
import { roundListState } from "../data/dataState";
import { useNavigate } from "react-router-dom";

const Complete = () => {
  // logic
  const history = useNavigate();

  const roundList = useRecoilValue(roundListState);
  const [score, setScore] = useState(0);

  const share = () => {
    console.log("share");
  };

  const changeScore = () => {
    console.log("roundList", roundList);
    const maxScore = 100 / roundList.length;
    const resultScore = roundList.reduce((acc, current): number => {
      const { isSkip, hintCount } = current;
      return isSkip ? acc : acc + (maxScore - (hintCount - 1) * 2);
    }, 0);
    setScore(resultScore);
    // console.log("🚀 ~ resultScore:", resultScore);
  };

  useEffect(() => {
    changeScore();
  });

  // view
  return (
    <div className="h-full pt-6 flex flex-col items-center">
      <img src="/images/star.svg" className="w-40" alt="star" />
      {/* <img src="/images/incorrect.svg" alt="correct" /> */}
      <div className="pt-9 pb-6">
        <Title mainTitle="축하합니다" subTitle="모든문제를 다 풀었어요!" />
      </div>
      {/* START: 점수 */}
      <div className="flex items-center py-3 px-7 bg-mb-green-200 rounded-3xl">
        <i className="block w-3 h-6 bg-lightning bg-no-repeat" />
        <span className="pl-1">{score}점</span>
      </div>
      {/* END: 풀이 */}
      <div className="mt-auto w-full">
        <Button
          text="Share with friends"
          color="bg-mb-blue-700"
          onClick={share}
        />
        <Button
          variant="transparent"
          text="Back to Home"
          onClick={() => history("/")}
        />
      </div>
    </div>
  );
};

export default Complete;
