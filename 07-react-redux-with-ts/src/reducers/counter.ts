import { ActionType, CounterAction } from "../actions";


export const counterReducer = (state: number = 0, action: CounterAction): number => {
  switch (action.type) {
    case ActionType.ADD_COUNTER:
      return state + action.payload;
    default: 
      return state;
  }
}