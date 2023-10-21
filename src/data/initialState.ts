import { CalcRuleType, ProposalNumberType, RoundType } from "../lib/type";
import { calcRuleList } from "./common";

// const total = 5

const setCalcRule = (index: number): CalcRuleType => {
  return calcRuleList[index];
};

export const initialRoundList: RoundType[] = [
  {
    id: 1,
    step: 1,
    isComplete: true,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
  {
    id: 2,
    step: 2,
    isComplete: false,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
  {
    id: 3,
    step: 3,
    isComplete: false,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
  {
    id: 4,
    step: 4,
    isComplete: false,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
  {
    id: 5,
    step: 5,
    isComplete: false,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
];

export const initialProposalNumber: ProposalNumberType = {
  left: 0,
  right: 0,
};
