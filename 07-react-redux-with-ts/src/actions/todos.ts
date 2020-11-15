import axios from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { StoreState } from "../reducers";
import { ActionType } from "./types";


export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


export interface FetchTodosAction {
  type: ActionType.FETCH_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionType.DELETE_TODO;
  payload: number;
}


export const fetchTodos = (): ThunkAction<Promise<void>, StoreState, any, FetchTodosAction> => async (dispatch: Dispatch<FetchTodosAction>) => {
  const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  dispatch({ type: ActionType.FETCH_TODOS, payload: response.data });
}


export const deleteTodo = (id: number): DeleteTodoAction => {
  return { type: ActionType.DELETE_TODO, payload: id };
}