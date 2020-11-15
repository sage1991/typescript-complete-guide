import { combineReducers } from "redux";
import { Todo } from "../actions";
import { counterReducer } from "./counter";
import { todosReducer } from "./todos";


export interface StoreState {
  counter: number;
  todos: Todo[];
}


export const reducers = combineReducers<StoreState>({
  counter: counterReducer,
  todos: todosReducer
});