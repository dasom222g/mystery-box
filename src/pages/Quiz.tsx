import React, { useCallback, useEffect, useState } from "react";
import { initialHintList, initialProposal } from "../data/initialState";
import {
  CorrectResultType,
  HintType,
  HintValueType,
  ProposalType,
  RoundType,
} from "../lib/type";
import Button from "../components/Button";
import Proposal from "../components/Proposal";
import AnswerButtonList from "../components/AnswerButton";
import { generateQuiz } from "../data/common";
import HintLock from "../components/HintLock";
import Hint from "../components/Hint";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentRoundState, roundListState } from "../data/dataState";
import Step from "../components/Step";
import { sleep } from "../lib/util";

const Quiz = () => {
  // logic
  const history = useNavigate();
  const [roundList, setRoundList] = useRecoilState<RoundType[]>(roundListState);
  const currentRound = useRecoilValue(currentRoundState);

  const [proposal, setProposal] = useState<ProposalType>(initialProposal);
  const { proposalNumber, choiceList, answer } = proposal;

  const [correctResult, setCorrectResult] = useState<CorrectResultType | null>(
    null
  );

  // hint
  const [hintList, setHintList] = useState<HintType[]>(initialHintList);
  const [isLock, setIstLock] = useState(true);

  const hintMaxCount = 10;

  const goResult = (isSkip: boolean) => {
    setRoundList((prev) =>
      prev.map((item) =>
        item.step === currentRound
          ? { ...item, isSkip, hintCount: hintList.length }
          : item
      )
    );
    history("/result");
  };

  const handleCorrectCheck = async (selectedItem: number) => {
    const isCorrect = selectedItem === answer;
    const result: CorrectResultType = {
      selectedItem,
      state: isCorrect ? "correct" : "inCorrect",
    };
    setCorrectResult(result);
    await sleep(2000);

    isCorrect ? goResult(false) : setCorrectResult(null);
  };

  // hint관련
  const handleHintOpen = () => {
    setHintList((prev) => [
      ...prev,
      { ...initialHintList[0], id: prev.length + 1 },
    ]);
    setIstLock(true);
  };

  const handleHintAnswer = (value: HintValueType, id: number) => {
    const { left: leftVale, right: rightValue } = value;
    const left = Number(leftVale);
    const right = Number(rightValue);
    const answer = roundList
      .find((round) => round.step === currentRound)!
      .calcRule.rule(left, right);

    setHintList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, left, right, answer } : item
      )
    );

    setIstLock(false);
  };

  useEffect(() => {
    const calcRule = roundList.find(
      (round) => round.step === currentRound
    )!.calcRule;
    const { left, right, answer, choiceList } = generateQuiz(calcRule);
    setProposal((prev) => ({
      ...prev,
      proposalNumber: { left, right },
      choiceList,
      answer,
    }));
    setRoundList((prev) =>
      prev.map((item) =>
        item.step === currentRound ? { ...item, isComplete: true } : item
      )
    );
    console.log("라운드", currentRound);
    console.log("문제", calcRule.description);
    console.log("선택지", choiceList);
    console.log("정답", answer);
  }, []);

  // view
  return (
    <div className="h-full w-full flex flex-col items-center">
      <Step />
      <div className="w-full px-2">
        <div className="pt-16 pb-10 w-full">
          <Proposal left={proposalNumber.left} right={proposalNumber.right} />
        </div>
        {hintList.map((hint, index) => (
          <Hint
            key={index}
            id={hint.id}
            onSubmit={handleHintAnswer}
            answer={hint.answer}
          />
        ))}
        {hintList.length !== hintMaxCount && (
          <div className="w-full py-8">
            <HintLock disabled={isLock} onClick={handleHintOpen} />
          </div>
        )}
      </div>
      <AnswerButtonList
        list={choiceList}
        result={correctResult}
        onClick={handleCorrectCheck}
      />
      <div className=" w-full mt-auto pt-8">
        <Button text={`Skip for now`} onClick={() => goResult(true)} />
      </div>
    </div>
  );
};

export default Quiz;
