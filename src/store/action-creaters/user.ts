import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/users";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
            const response = await axios.get(`${process.env.REACT_APP_USERS_URL}`);
            dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: "An error occurred while loading the user",
            });
        }
    };
};
