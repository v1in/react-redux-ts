import axios from "axios";
import { type Dispatch } from "redux";
import { type TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(import.meta.env.VITE_APP_TODOS_URL, {
        params: { _page: page, _limit: limit },
      });
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "An error occurred while loading the todos",
      });
    }
  };
};

export const setTodoPage = (page: number): TodoAction => {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
};
