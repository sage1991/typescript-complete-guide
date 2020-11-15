import { ActionType } from "./types"


export interface AddCounterAction {
  type: ActionType.ADD_COUNTER;
  payload: number;
}


export const addCounter = (num: number): AddCounterAction => {
  return { type: ActionType.ADD_COUNTER, payload: num };
}