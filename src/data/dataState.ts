import { atom } from "recoil";
import { RoundType, ScoreType } from "../lib/type";
import { initialRoundList } from "./initialState";

export const scoreListState = atom<ScoreType[]>({
  key: "scoreListState",
  default: [],
});

export const roundListState = atom<RoundType[]>({
  key: "roundListState",
  default: initialRoundList,
});

export const currentRoundState = atom({
  key: "currentRoundState",
  default: 1,
});
