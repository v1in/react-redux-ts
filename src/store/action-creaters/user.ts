import axios from "axios";
import { type Dispatch } from "redux";
import { type UserAction, UserActionTypes } from "../../types/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(import.meta.env.VITE_APP_USERS_URL);
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "An error occurred while loading the user",
      });
    }
  };
};
