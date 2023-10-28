import React, { useCallback, useEffect, useState } from "react";
import {
  initialHintList,
  initialProposal,
  initialRoundList,
} from "../data/initialState";
import Box from "../components/Box";
import { HintType, HintValueType, ProposalType, RoundType } from "../lib/type";
import Button from "../components/Button";
import Proposal from "../components/Proposal";
import AnswerButtonList from "../components/AnswerButton";
import { generateRandomAnswer } from "../data/common";
import HintLock from "../components/HintLock";
import Hint from "../components/Hint";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  // logic
  const history = useNavigate();
  const [roundList, setRoundList] = useState<RoundType[]>(initialRoundList);

  const [proposal, setProposal] = useState<ProposalType>(initialProposal);
  const { proposalNumber, choiceList, answer } = proposal;
  const [hintList, setHintList] = useState<HintType[]>(initialHintList);

  const randomMax = 100;
  const hintMaxCount = 10;

  // 문제, 정답 관련

  const handleProposal = () => {
    const { left, right, answer } = generateRandomAnswer(
      randomMax,
      roundList[0].calcRule
    );

    const randomIndex = Math.floor(Math.random() * proposal.choiceList.length);

    const choiceList = proposal.choiceList.map((item, index) => {
      const { answer: randomAnswer } = generateRandomAnswer(
        randomMax,
        roundList[0].calcRule
      );

      return index === randomIndex ? answer : randomAnswer;
    });

    setProposal((prev) => ({
      ...prev,
      proposalNumber: { left, right },
      choiceList,
      answer,
    }));
  };

  const handleCheck = (selectedItem: number) => {
    console.log("🚀 ~ selectedItem:", selectedItem);
  };

  const handleDuplicate = useCallback(() => {
    const uniqList = [...new Set(choiceList)];

    if (uniqList.length === choiceList.length) {
      return;
    }
    // 중복인 경우 실행
    let copyProposal = { ...proposal };

    choiceList.reduce((acc, current, index, array): number[] => {
      if (array.some((item) => item === current)) {
        const { left, right, answer } = generateRandomAnswer(
          randomMax,
          roundList[0].calcRule
        );
        copyProposal = {
          ...copyProposal,
          proposalNumber: { left, right },
          answer,
        };
        copyProposal.choiceList[index] = answer;
        return [...acc, answer];
      }
      return [...acc, current];
    }, [] as number[]);

    setProposal(copyProposal);
  }, [choiceList, proposal, roundList]);

  // hint관련
  const handleHintOpen = () => {
    console.log("open");
  };

  const handleHintAnswer = (value: HintValueType) => {
    const { left: leftVale, right: rightValue } = value;
    const left = Number(leftVale);
    const right = Number(rightValue);
    const answer = roundList[0].calcRule.rule(left, right);

    hintList.length === 1
      ? setHintList((prev) =>
          prev.map((item) => ({ ...item, left, right, answer }))
        )
      : setHintList((prev) => [
          ...prev,
          { left: Number(left), right: Number(right), answer },
        ]);
  };

  const goResult = () => {
    history("/result");
  };

  useEffect(() => {
    handleProposal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleDuplicate();
    // console.log("정답", proposal.answer);
  }, [handleDuplicate, proposal]);

  // 문제 확인
  useEffect(() => {
    console.log("문제", roundList[0].calcRule);
  }, [roundList]);

  // view
  return (
    <div className="h-full w-full flex flex-col items-center">
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
      <div className="w-full px-2">
        <div className="pt-16 pb-10 w-full">
          <Proposal left={proposalNumber.left} right={proposalNumber.right} />
        </div>
        {hintList.map((hint, index) => (
          <Hint key={index} onSubmit={handleHintAnswer} answer={hint.answer} />
        ))}

        <div className="w-full py-8">
          <HintLock disabled={true} onClick={handleHintOpen} />
        </div>
      </div>
      <AnswerButtonList
        list={choiceList}
        isReset={false}
        result="default"
        onClick={handleCheck}
      />
      <div className="mt-auto w-full">
        <Button text={`Skip for now`} onClick={goResult} />
      </div>
    </div>
  );
};

export default Quiz;
