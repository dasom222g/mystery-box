import { atom } from "recoil";
import { RoundType } from "../lib/type";
import { initialRoundList } from "./initialState";

export const roundListState = atom<RoundType[]>({
  key: "roundListState",
  default: initialRoundList,
});

export const currentRoundState = atom({
  key: "currentRoundState",
  default: 1,
});
