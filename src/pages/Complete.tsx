import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentRoundState, roundListState } from "../data/dataState";
import { useNavigate } from "react-router-dom";
import { initialRoundList } from "../data/initialState";

const Complete = () => {
  // logic
  const history = useNavigate();

  const [roundList, setRoundList] = useRecoilState(roundListState);
  const setCurrentRound = useSetRecoilState(currentRoundState);
  const [score, setScore] = useState(0);

  const shareData = {
    title: "미스터리 박스",
    text: "미스터리 박스에 숨겨져있는 연산규칙을 찾아내 문제를 맞춰보세요!",
    url: "https://gleaming-lokum-501c7f.netlify.app/",
  };

  const share = async () => {
    try {
      console.log("navigator", navigator);
      if (!navigator.share) return;
      await navigator.share(shareData);
      console.log("Success!!");
    } catch (error) {
      console.error("error!!");
      console.error(error);
    }
  };

  const changeScore = () => {
    console.log("roundList", roundList);
    const maxScore = 100 / roundList.length;
    const resultScore = roundList.reduce((acc, current): number => {
      const { isSkip, hintCount } = current;
      return isSkip ? acc : acc + (maxScore - (hintCount - 1) * 2);
    }, 0);
    setScore(resultScore);
  };

  const goHome = () => {
    setRoundList(initialRoundList);
    setCurrentRound(1);
    history("/");
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
        <Button variant="transparent" text="Back to Home" onClick={goHome} />
      </div>
    </div>
  );
};

export default Complete;
