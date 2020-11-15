import { Todo, ActionType, TodoAction } from "../actions";


export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return action.payload;
    case ActionType.DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default: 
      return state;
  }
}