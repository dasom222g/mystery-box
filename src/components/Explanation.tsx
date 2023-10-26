import React, { FC } from "react";
import Box from "./Box";

interface ExplanationProps {
  text: string;
}

const Explanation: FC<ExplanationProps> = ({ text }) => {
  return (
    <div className="relative w-full">
      <div className="-ml-1">
        <Box type="current" />
      </div>
      <div className="w-full absolute top-7 left-1/2 transform -translate-x-1/2">
        <div className="px-5">
          <i className="block h-10 bg-box-shadow bg-no-repeat bg-contain bg-left-bottom" />
          <p className="p-2 -mt-[1px] text-lg font-bold text-white text-center bg-mb-green-400 rounded-b-mb-lg">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
