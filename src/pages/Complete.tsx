import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";

const Complete = () => {
  // logic
  const share = () => {
    console.log("share");
  };

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
        <span className="pl-1">97점</span>
      </div>
      {/* END: 풀이 */}
      <div className="mt-auto w-full">
        <Button
          text="Share with friends"
          color="bg-mb-blue-700"
          onClick={share}
        />
        <Button variant="transparent" text="Back to Home" onClick={share} />
      </div>
    </div>
  );
};

export default Complete;
