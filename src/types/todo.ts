interface Todo {
  id: number;
  title: string;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export const TodoActionTypes = {
  FETCH_TODOS: "FETCH_TODOS",
  FETCH_TODOS_SUCCESS: "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR: "FETCH_TODOS_ERROR",
  SET_TODO_PAGE: "SET_TODO_PAGE",
} as const;

interface FetchTodoAction {
  type: typeof TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
  type: typeof TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

interface FetchTodoErrorAction {
  type: typeof TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodoPage {
  type: typeof TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetTodoPage;
