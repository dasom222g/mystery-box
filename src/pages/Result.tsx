import React from "react";
import Explanation from "../components/Explanation";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const history = useNavigate();
  const goNext = () => {
    history("/quiz");
  };
  return (
    <div className="h-full pt-6 flex flex-col items-center">
      <img src="/images/correct.svg" className="w-56" alt="correct" />
      {/* <img src="/images/incorrect.svg" alt="correct" /> */}
      <div className="mt-8">
        <Title mainTitle="정답입니다" />
      </div>
      {/* START: 풀이 */}
      <div className="w-full mt-8">
        <Explanation text="큰 수 + 두수의 차 x 2 - 작은 수" />
      </div>
      {/* END: 풀이 */}
      <div className="mt-auto w-full">
        <Button text="Next" color="bg-mb-pink-700" onClick={goNext} />
      </div>
    </div>
  );
};

export default Result;
