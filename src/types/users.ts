interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: null | string;
}

export const UserActionTypes = {
  FETCH_USERS: "FETCH_USERS",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR: "FETCH_USERS_ERROR",
} as const;

interface FetchUserAction {
  type: typeof UserActionTypes.FETCH_USERS;
}

interface FetchUserSuccessAction {
  type: typeof UserActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUserErrorAction {
  type: typeof UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;
