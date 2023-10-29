import { CalcRuleType, QuizType, RoundType } from "../lib/type";
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

export const generateQuiz = (
  calcRule: CalcRuleType,
  options?: {
    maxInputNumber?: number;
    proposalCount?: number;
  }
): QuizType => {
  const { maxInputNumber = 100, proposalCount = 4 } = options ?? {};
  const { left, right, answer } = generateRandomAnswer(
    maxInputNumber,
    calcRule
  );

  const randomIndex = randomInt(proposalCount);

  const choiceList = [...new Array(proposalCount)].map((item, index) => {
    const recursiveGenerateAnswer = (): number => {
      const { answer: randomAnswer } = generateRandomAnswer(
        maxInputNumber,
        calcRule
      );
      if (answer === randomAnswer || Infinity === randomAnswer) {
        return recursiveGenerateAnswer();
      }
      return randomAnswer;
    };
    return index === randomIndex ? answer : recursiveGenerateAnswer();
  });

  const uniqList = [...new Set(choiceList)];
  if (uniqList.length !== choiceList.length) {
    return generateQuiz(calcRule, options);
  }

  return { left, right, answer, choiceList };
};
