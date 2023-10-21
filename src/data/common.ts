import { CalcRuleType } from "../lib/type";

export const calcRuleList: CalcRuleType[] = [
  {
    id: 1,
    name: "add",
    description: "두 수의 합",
    rule: (a, b) => a + b,
  },
  {
    id: 2,
    name: "subract",
    description: "두 수의 차",
    rule: (a, b) => a - b,
  },
  {
    id: 3,
    name: "multiply",
    description: "두 수의 곱",
    rule: (a, b) => a * b,
  },
  {
    id: 4,
    name: "division",
    description: "두 수의 나누기",
    rule: (a, b) => a / b,
  },
  {
    id: 5,
    name: "timeRemainder",
    description: "두 수의 합을 12로 나눈 나머지",
    rule: (a, b) => (a + b) % 12,
  },
];
