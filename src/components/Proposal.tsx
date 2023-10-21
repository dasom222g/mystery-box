import React, { FC } from "react";
import Box from "./Box";

interface ProposalProps {
  left: number;
  right: number;
}

const Proposal: FC<ProposalProps> = ({ left, right }) => {
  return (
    <div className="flex justify-center">
      <span className="block text-4xl font-bold text-white px-3">{left}</span>
      <div className="px-3">
        <Box type="current" />
      </div>
      <span className="block text-4xl font-bold text-white px-3">{right}</span>
      <span className="block text-4xl font-bold text-white px-3">=</span>
    </div>
  );
};

export default Proposal;
