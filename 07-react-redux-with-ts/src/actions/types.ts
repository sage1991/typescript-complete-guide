import { FetchTodosAction, DeleteTodoAction } from "./todos";
import { AddCounterAction } from "./counter";


export enum ActionType {
  FETCH_TODOS,
  DELETE_TODO,
  ADD_COUNTER,
}


export type TodoAction = FetchTodosAction | DeleteTodoAction;
export type CounterAction = AddCounterAction;