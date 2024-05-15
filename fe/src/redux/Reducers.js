import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./Constants";

export const loginReducer = (state = { data: [] }, action) => {
    switch(action.type) {
      case USER_LOGIN_REQUEST:
        return { ...state, loading: true };
      case USER_LOGIN_SUCCESS:
        return { ...state, data: action.payload, loading: false, error: null };
      case USER_LOGIN_FAILURE:
        return { ...state, data: null, loading: false, error: action.payload };
      case USER_LOGOUT:
        return { data: null };
      default:
        return state;
    }
  };