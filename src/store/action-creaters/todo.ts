import axios from "axios";
import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODOS });
            const response = await axios.get(`${process.env.REACT_APP_TODOS_URL}`, {
                params: { _page: page, _limit: limit }
            });
            dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: "An error occurred while loading the todos",
            });
        }
    };
};


export const setTodoPage = (page: number): TodoAction => {
    return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}