export interface RoundType {
  id: number;
  step: number;
  isComplete: boolean;
  isSkip: boolean;
  hintCount: number;
  calcRule: CalcRuleType;
}

export interface CalcRuleType {
  id: number;
  name: string;
  description: string;
  rule: (a: number, b: number) => number;
}

export interface ProposalNumberType {
  left: number;
  right: number;
}

export interface ChoiceType {
  id: number;
  data: number;
  isAnswer: boolean;
}

export interface ProposalType {
  proposalNumber: ProposalNumberType;
  choiceList: number[];
  answer: number;
}

export interface HintValueType {
  left: string;
  right: string;
}

export interface HintType extends ProposalNumberType {
  id: number;
  answer: number | null;
}

const correctResult = {
  default: "default",
  correct: "correct",
  inCorrect: "inCorrect",
} as const;

type CorrectStateType = (typeof correctResult)[keyof typeof correctResult];

export interface CorrectResultType {
  selectedItem: number;
  state: CorrectStateType;
}

export interface ScoreType {
  id: number;
  step: number;
  isSkip: boolean;
  hintCount: number;
}
