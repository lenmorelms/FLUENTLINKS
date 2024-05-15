import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./Constants";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const response = await axios.post(`/api/users/login`, {email, password}, config);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userInfo', response.data.user);
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILURE, payload: error.message });
    }
};

// LOGOUT
export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    dispatch({ type: USER_LOGOUT });
};