export interface RoundType {
  id: number;
  step: number;
  isComplete: boolean;
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
