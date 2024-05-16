import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { 
    ADD_CREATIVELINKS_FAILURE, ADD_CREATIVELINKS_REQUEST, ADD_CREATIVELINKS_SUCCESS,
    ADD_SOCIALLINKS_FAILURE, ADD_SOCIALLINKS_REQUEST, ADD_SOCIALLINKS_SUCCESS,
    DELETE_CREATIVELINKS_FAILURE, DELETE_CREATIVELINKS_REQUEST, DELETE_CREATIVELINKS_SUCCESS,
    DELETE_PROFILE_FAILURE, DELETE_PROFILE_REQUEST, DELETE_PROFILE_SUCCESS,
    DELETE_SOCIALLINKS_FAILURE, DELETE_SOCIALLINKS_REQUEST, DELETE_SOCIALLINKS_SUCCESS,
    EDIT_CREATIVELINKS_FAILURE, EDIT_CREATIVELINKS_REQUEST, EDIT_CREATIVELINKS_SUCCESS,
    EDIT_PROFILE_FAILURE, EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS,
    EDIT_SOCIALLINKS_FAILURE, EDIT_SOCIALLINKS_REQUEST, EDIT_SOCIALLINKS_SUCCESS,
    FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, 
    RESEND_TOKEN_FAILURE, RESEND_TOKEN_REQUEST, RESEND_TOKEN_SUCCESS, 
    RESET_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, 
    TEST_DATA_FAILURE, TEST_DATA_REQUEST, TEST_DATA_SUCCESS, 
    USER_CREATIVELINKS_FAILURE, USER_CREATIVELINKS_REQUEST, USER_CREATIVELINKS_SUCCESS, 
    USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, 
    USER_PROFILE_FAILURE, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, 
    USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, 
    USER_SOCIALLINKS_FAILURE, USER_SOCIALLINKS_REQUEST, USER_SOCIALLINKS_SUCCESS, 
    USER_VERIFY_FAILURE, USER_VERIFY_REQUEST, USER_VERIFY_SUCCESS 
} from "./Constants";

function createConfig(contentType, Authorization) {
    const config = {
        headers: {
            "Content-type": contentType,
            "Authorization": Authorization,
        },
    };
    return config;
}
// TEST
export const test = () => async (dispatch) => {
    try {
        dispatch({ type: TEST_DATA_REQUEST });
        const response = await axios.get('/api/test');
        dispatch({ type: TEST_DATA_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: TEST_DATA_FAILURE, payload: error.message });
    }
};
// ########## USER ACTIONS ################
// LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = createConfig("application/json");
        const response = await axios.post(`/api/users/login`, {email, password}, config);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userInfo', response.data.user);
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILURE, payload: error.message });
    }
};
// REGISTER
export const register = (email, username, age, gender, country, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = createConfig("application/json");
        const response = await axios.post(`/api/users/register`, { email, username, age, gender, country, password }, config);
        dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data.user });    
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILURE, payload: error.message });
    }
};
// FORGOT PASSWORD
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });
        const config = createConfig("application/json");
        const response = await axios.patch(`/api/users/forgot-password`, { email }, config);
        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: error.message });
    }
};
// RESET PASSWORD
export const resetPassword = (verificationToken, password) => async (dispatch) => {
    try {
        dispatch({ type: RESET_PASSWORD_REQUEST });
        const config = createConfig("application/json");
        const response = await axios.patch(`/api/users/reset-password/${verificationToken}`, { password }, config);
        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: RESET_PASSWORD_FAILURE, payload: error.message });
    }
};
// VERIFY USER
export const verifyUser = (verificationToken) => async (dispatch) => {
    try {
        dispatch({ type: USER_VERIFY_REQUEST });
        const config = createConfig("application/json");
        const response = await axios.patch(`/api/users/verify/${verificationToken}`, config);
        dispatch({ type: USER_VERIFY_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: USER_VERIFY_FAILURE, payload: error.message });
    }
};
// RESEND VERIFICATION LINK
export const resendToken = (id) => async (dispatch) => {
    try {
        dispatch({ type: RESEND_TOKEN_REQUEST });
        const config = createConfig("application/json");
        const response = await axios.get(`/api/users/resend-code/${id}`, config);
        dispatch({ type: RESEND_TOKEN_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: RESEND_TOKEN_FAILURE, payload: error.message });
    }
};
// PROFILE DETAILS
export const profile = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_PROFILE_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.get(`/api/users/profile/${id}`, config);
        dispatch({ type: USER_PROFILE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: USER_PROFILE_FAILURE, payload: error.message });
    }
};
// EDIT PROFILE DETAILS
export const editProfile = (id, email, username, password) => async (dispatch, getState) => {
    try {
        dispatch({ type: EDIT_PROFILE_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.patch(`/api/users/profile/${id}`, {email, username, password}, config);
        dispatch({ type: EDIT_PROFILE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: EDIT_PROFILE_FAILURE, payload: error.message });
    }
};
// DELETE USER PROFILE
export const deleteProfile = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_PROFILE_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.delete(`/api/users/profile/${id}`, config);
        dispatch({ type: DELETE_PROFILE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: DELETE_PROFILE_FAILURE, payload: error.message });
    }
};
// LOGOUT
export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    dispatch({ type: USER_LOGOUT });
};

// ########## SOCIAL/CONTACTS ACTIONS ################

export const socialLinks = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_SOCIALLINKS_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.get(`/api/social/${id}`, config);
        dispatch({ type: USER_SOCIALLINKS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: USER_SOCIALLINKS_FAILURE, payload: error.message });
    }
};

export const addSocialLinks = (userId, image, heading, instagram, twitter, tiktok, facebook, whatsapp, telegram, email, website, saveContact) => async (dispatch, getState) => {
    try {
        dispatch({ type: ADD_SOCIALLINKS_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.post(`/api/social/`, {userId, image, heading, instagram, twitter, tiktok, facebook, whatsapp, telegram, email, website, saveContact}, config);
        dispatch({ type: ADD_SOCIALLINKS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: ADD_SOCIALLINKS_FAILURE, payload: error.message });
    }
};

export const editSocialLinks = (id, image, heading, instagram, twitter, tiktok, facebook, whatsapp, telegram, email, website, saveContact) => async (dispatch, getState) => {
    try {
        dispatch({ type: EDIT_SOCIALLINKS_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.patch(`/api/social/${id}`, {image, heading, instagram, twitter, tiktok, facebook, whatsapp, telegram, email, website, saveContact}, config);
        dispatch({ type: EDIT_SOCIALLINKS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: EDIT_SOCIALLINKS_FAILURE, payload: error.message });
    }
};

export const deleteSocialLinks = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_SOCIALLINKS_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.delete(`/api/social/${id}`, config);
        dispatch({ type: DELETE_SOCIALLINKS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: DELETE_SOCIALLINKS_FAILURE, payload: error.message });
    }
};

// ########## CREATIVE/MUSIC ACTIONS ################

export const creativeLinks = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_CREATIVELINKS_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.get(`/api/creative/${id}`, config);
        dispatch({ type: USER_CREATIVELINKS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: USER_CREATIVELINKS_FAILURE, payload: error.message });
    }
};

export const addCreativeLinks = (userId, image, heading, youtube, audiomack, soundcloud, spotify, appleMusic, itunes, tidal, boomsPlay, other) => async (dispatch, getState) => {
    try {
        dispatch({ type: ADD_CREATIVELINKS_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.post(`/api/creative/`, {userId, image, heading, youtube, audiomack, soundcloud, spotify, appleMusic, itunes, tidal, boomsPlay, other}, config);
        dispatch({ type: ADD_CREATIVELINKS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: ADD_CREATIVELINKS_FAILURE, payload: error.message });
    }
};

export const editCreativeLinks = (id, image, heading, youtube, audiomack, soundcloud, spotify, appleMusic, itunes, tidal, boomsPlay, other) => async (dispatch, getState) => {
    try {
        dispatch({ type: EDIT_CREATIVELINKS_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.patch(`/api/creative/${id}`, {image, heading, youtube, audiomack, soundcloud, spotify, appleMusic, itunes, tidal, boomsPlay, other}, config);
        dispatch({ type: EDIT_CREATIVELINKS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: EDIT_CREATIVELINKS_FAILURE, payload: error.message });
    }
};

export const deleteCreativeLinks = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_CREATIVELINKS_REQUEST });
        const {
            _login: { data },
        } = getState();
        const config = createConfig(`Bearer ${data.token}`);
        const response = await axios.delete(`/api/creative/${id}`, config);
        dispatch({ type: DELETE_CREATIVELINKS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: DELETE_CREATIVELINKS_FAILURE, payload: error.message });
    }
};