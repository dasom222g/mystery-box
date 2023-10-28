import React, { useCallback, useEffect, useState } from "react";
import { initialHintList, initialProposal } from "../data/initialState";
import {
  CorrectResultType,
  HintType,
  HintValueType,
  ProposalType,
  RoundType,
  ScoreType,
} from "../lib/type";
import Button from "../components/Button";
import Proposal from "../components/Proposal";
import AnswerButtonList from "../components/AnswerButton";
import { generateRandomAnswer, sleep } from "../data/common";
import HintLock from "../components/HintLock";
import Hint from "../components/Hint";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentRoundState, roundListState } from "../data/dataState";
import Step from "../components/Step";

const Quiz = () => {
  // logic
  const history = useNavigate();
  const [roundList, setRoundList] = useRecoilState<RoundType[]>(roundListState);
  const [currentRound, setCurrentRound] = useRecoilState(currentRoundState);

  const [proposal, setProposal] = useState<ProposalType>(initialProposal);
  const { proposalNumber, choiceList, answer } = proposal;

  const [correctResult, setCorrectResult] = useState<CorrectResultType | null>(
    null
  );

  // hint
  const [hintList, setHintList] = useState<HintType[]>(initialHintList);
  const [isLock, setIstLock] = useState(true);

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

  const goResult = (isSkip: boolean) => {
    setCurrentRound((prev) => prev + 1);
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
    setHintList((prev) => [
      ...prev,
      { ...initialHintList[0], id: prev.length + 1 },
    ]);
    setIstLock(true);
  };

  const handleHintAnswer = (value: HintValueType, id: number) => {
    console.log("value", value);
    const { left: leftVale, right: rightValue } = value;
    const left = Number(leftVale);
    const right = Number(rightValue);
    const answer = roundList[0].calcRule.rule(left, right);

    setHintList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, left, right, answer } : item
      )
    );

    setIstLock(false);
  };

  useEffect(() => {
    handleProposal();
    setRoundList((prev) =>
      prev.map((item) =>
        item.step === currentRound ? { ...item, isComplete: true } : item
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleDuplicate();
    console.log("정답", proposal.answer);
  }, [handleDuplicate, proposal]);

  // 문제 확인
  useEffect(() => {
    console.log("문제", roundList[0].calcRule);
  }, [roundList]);

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
