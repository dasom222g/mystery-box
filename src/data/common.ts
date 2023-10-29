import { CalcRuleType } from "../lib/type";
import { randomInt } from "../lib/util";

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
    description: "두 수를 나눈후 소수점 버린 값",
    rule: (a, b) => Math.floor(a / b),
  },
  {
    id: 5,
    name: "timeRemainder",
    description: "두 수의 합을 12로 나눈 나머지",
    rule: (a, b) => (a + b) % 12,
  },
];

export const generateRandomAnswer = (
  max: number,
  calcRule: CalcRuleType
): { left: number; right: number; answer: number } => {
  const left = randomInt(max);
  const right = randomInt(max);
  const answer = calcRule.rule(left, right);
  return { left, right, answer };
};
