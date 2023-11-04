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
    description: "두 수를 나눈후 소수점 버린 값",
    rule: (a, b) => Math.floor(a / b),
  },
  {
    id: 5,
    name: "timeRemainder",
    description: "두 수의 합을 12로 나눈 나머지",
    rule: (a, b) => (a + b) % 12,
  },
  {
    id: 6,
    name: "addAndSubract",
    description: "두수의 합,두수의 차",
    rule: (a, b) => Number(String(a + b) + String(a - b)),
  },
  {
    id: 7,
    name: "doubleAndSubract",
    description: "앞자리 * 2 - 뒷자리",
    rule: (a, b) => a * 2 - b,
  },
  {
    id: 8,
    name: "addMultiflyRight",
    description: " 두 수의 합 * 뒤의 수",
    rule: (a, b) => (a + b) * b,
  },
];

export const generateRandomAnswer = (
  max: number,
  calcRule: CalcRuleType
): { left: number; right: number; answer: number } => {
  const left = Math.floor(Math.random() * max) + 1;
  const right = Math.floor(Math.random() * max) + 1;
  const answer = calcRule.rule(left, right);
  return { left, right, answer };
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
