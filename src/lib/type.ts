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
