import React, { useEffect, useState } from "react";
import Explanation from "../components/Explanation";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentRoundState, roundListState } from "../data/dataState";
import { RoundType } from "../lib/type";

const Result = () => {
  const history = useNavigate();

  const roundList = useRecoilValue(roundListState);
  const [currentRound, setCurrentRound] = useRecoilState(currentRoundState);
  const [round, setRound] = useState<RoundType>();

  const goNext = () => {
    roundList.length > currentRound && setCurrentRound((prev) => prev + 1); //1~4 문제
    history(roundList.length === currentRound ? "/complete" : "/quiz");
  };

  useEffect(() => {
    console.log("currentRound", currentRound);
    setRound(roundList.find((round) => round.step === currentRound));
  }, [roundList, currentRound]);

  useEffect(() => {
    console.log("round", round);
  }, [round]);
  return (
    <div className="h-full pt-6 flex flex-col items-center">
      {round && (
        <>
          <img
            src={`/images/${round.isSkip ? "incorrect" : "correct"}.svg`}
            className="w-56"
            alt="correct"
          />
          <div className="mt-8">
            {<Title mainTitle={round.isSkip ? "아쉽네요" : "정답입니다"} />}
          </div>
          <div className="w-full mt-8">
            {<Explanation text={round.calcRule.description} />}
          </div>
        </>
      )}
      <div className="mt-auto w-full">
        <Button text="Next" color="bg-mb-blue-700" onClick={goNext} />
      </div>
    </div>
  );
};

export default Result;
