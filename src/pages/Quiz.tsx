import React, { useEffect, useState } from "react";
import { initialProposalNumber, initialRoundList } from "../data/initialState";
import Box from "../components/Box";
import { ProposalNumberType, RoundType } from "../lib/type";
import Button from "../components/Button";
import Proposal from "../components/Proposal";
import AnswerButtonList from "../components/AnswerButton";

const Quiz = () => {
  // logic
  const [roundList, setRoundList] = useState<RoundType[]>(initialRoundList);

  const [proposalNumber, setProposalNumber] = useState<ProposalNumberType>(
    initialProposalNumber
  );

  const [answer, setAnswer] = useState(0);

  const handleCalc = () => {
    roundList.forEach((round) => {
      console.log("rule", round.calcRule);
    });
  };

  const handleProposal = () => {
    const left = Math.floor(Math.random() * 100) + 1;
    const right = Math.floor(Math.random() * 100) + 1;
    setProposalNumber({ left, right });
    setAnswer(roundList[0].calcRule.rule(left, right));
  };

  useEffect(() => {
    handleProposal();
    console.log("문제", roundList[0].calcRule);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("정답", answer);
  }, [answer]);

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
      <div className="pt-16 pb-10">
        <Proposal left={proposalNumber.left} right={proposalNumber.right} />
      </div>
      <div>
        <AnswerButtonList />
      </div>
      <Button text={`문제 테스트`} onClick={handleCalc} />
    </div>
  );
};

export default Quiz;
