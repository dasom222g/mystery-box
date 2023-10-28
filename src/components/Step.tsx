import React from "react";
import Box from "./Box";
import { useRecoilValue } from "recoil";
import { roundListState } from "../data/dataState";

const Step = () => {
  // logic
  const roundList = useRecoilValue(roundListState);

  // view
  return (
    <div>
      <ul className="flex justify-center">
        {roundList.map((round) => (
          <li key={round.id}>
            <Box
              key={round.id}
              type={round.isComplete ? "complete" : "default"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Step;
