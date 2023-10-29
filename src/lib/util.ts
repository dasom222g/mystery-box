export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const randomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};
