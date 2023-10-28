import {
  CalcRuleType,
  HintType,
  HintValueType,
  ProposalNumberType,
  ProposalType,
  RoundType,
} from "../lib/type";
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
    isSkip: false,
    hintCount: 1,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
  {
    id: 2,
    step: 2,
    isSkip: false,
    hintCount: 1,
    isComplete: false,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
  {
    id: 3,
    step: 3,
    isSkip: false,
    hintCount: 1,
    isComplete: false,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
  {
    id: 4,
    step: 4,
    isSkip: false,
    hintCount: 1,
    isComplete: false,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
  {
    id: 5,
    step: 5,
    isSkip: false,
    hintCount: 1,
    isComplete: false,
    calcRule: setCalcRule(Math.floor(Math.random() * calcRuleList.length)),
  },
];

export const initialProposalNumber: ProposalNumberType = {
  left: 0,
  right: 0,
};

export const initialProposal: ProposalType = {
  proposalNumber: {
    left: 0,
    right: 0,
  },
  choiceList: [0, 0, 0, 0],
  answer: 0,
};

export const initialHintValue: HintValueType = {
  left: "",
  right: "",
};

export const initialHintList: HintType[] = [
  {
    id: 1,
    left: 0,
    right: 0,
    answer: null,
  },
];
