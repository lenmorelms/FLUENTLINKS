import { 
  ADD_CREATIVELINKS_FAILURE,
  ADD_CREATIVELINKS_REQUEST,
  ADD_CREATIVELINKS_SUCCESS,
  ADD_SOCIALLINKS_FAILURE,
  ADD_SOCIALLINKS_REQUEST,
  ADD_SOCIALLINKS_SUCCESS,
  DELETE_CREATIVELINKS_FAILURE,
  DELETE_CREATIVELINKS_REQUEST,
  DELETE_CREATIVELINKS_SUCCESS,
  DELETE_PROFILE_FAILURE,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  DELETE_SOCIALLINKS_FAILURE,
  DELETE_SOCIALLINKS_REQUEST,
  DELETE_SOCIALLINKS_SUCCESS,
  EDIT_CREATIVELINKS_FAILURE,
  EDIT_CREATIVELINKS_REQUEST,
  EDIT_CREATIVELINKS_SUCCESS,
  EDIT_PROFILE_FAILURE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_SOCIALLINKS_FAILURE,
  EDIT_SOCIALLINKS_REQUEST,
  EDIT_SOCIALLINKS_SUCCESS,
  FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS,
  RESEND_TOKEN_FAILURE,
  RESEND_TOKEN_REQUEST,
  RESEND_TOKEN_SUCCESS,
  RESET_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS,
  USER_CREATIVELINKS_FAILURE,
  USER_CREATIVELINKS_REQUEST,
  USER_CREATIVELINKS_SUCCESS,
  USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT,
  USER_PROFILE_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, 
  USER_SOCIALLINKS_FAILURE, 
  USER_SOCIALLINKS_REQUEST, 
  USER_SOCIALLINKS_SUCCESS, 
  USER_VERIFY_FAILURE, USER_VERIFY_REQUEST, USER_VERIFY_SUCCESS 
} from "./Constants";

// ########## USER REDUCERS ################
// LOGIN
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
// REGISTER
export const registerReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_REGISTER_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// FORGOT PASSWORD
export const forgotPasswordReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case FORGOT_PASSWORD_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// RESET PASSWORD
export const resetPasswordReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case RESET_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case RESET_PASSWORD_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case RESET_PASSWORD_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// VERIFY USER
export const verifyUserReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_VERIFY_REQUEST:
      return { ...state, loading: true };
    case USER_VERIFY_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_VERIFY_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// RESEND TOKEN
export const resendTokenReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case RESEND_TOKEN_REQUEST:
      return { ...state, loading: true };
    case RESEND_TOKEN_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case RESEND_TOKEN_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// PROFILE
export const profileReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_PROFILE_REQUEST:
      return { ...state, loading: true };
    case USER_PROFILE_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_PROFILE_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const editProfileReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case EDIT_PROFILE_REQUEST:
      return { ...state, loading: true };
    case EDIT_PROFILE_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case EDIT_PROFILE_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteProfileReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case DELETE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case DELETE_PROFILE_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case DELETE_PROFILE_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

// ########## SOCIAL/CONTACTS REDUCERS ################
export const socialLinksReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_SOCIALLINKS_REQUEST:
      return { ...state, loading: true };
    case USER_SOCIALLINKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_SOCIALLINKS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addSocialLinksReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case ADD_SOCIALLINKS_REQUEST:
      return { ...state, loading: true };
    case ADD_SOCIALLINKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case ADD_SOCIALLINKS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editSocialLinksReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case EDIT_SOCIALLINKS_REQUEST:
      return { ...state, loading: true };
    case EDIT_SOCIALLINKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case EDIT_SOCIALLINKS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteSocialLinksReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case DELETE_SOCIALLINKS_REQUEST:
      return { ...state, loading: true };
    case DELETE_SOCIALLINKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case DELETE_SOCIALLINKS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

// ########## CREATIVE/MUSIC REDUCERS ################
export const creativeLinksReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_CREATIVELINKS_REQUEST:
      return { ...state, loading: true };
    case USER_CREATIVELINKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_CREATIVELINKS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addCreativeLinksReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case ADD_CREATIVELINKS_REQUEST:
      return { ...state, loading: true };
    case ADD_CREATIVELINKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case ADD_CREATIVELINKS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editCreativeLinksReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case EDIT_CREATIVELINKS_REQUEST:
      return { ...state, loading: true };
    case EDIT_CREATIVELINKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case EDIT_CREATIVELINKS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteCreativeLinksReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case DELETE_CREATIVELINKS_REQUEST:
      return { ...state, loading: true };
    case DELETE_CREATIVELINKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case DELETE_CREATIVELINKS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};





// export const Reducer = (state = { data: [] }, action) => {
//   switch(action.type) {
//     case REQUEST:
//       return { ...state, loading: true };
//     case SUCCESS:
//       return { ...state, data: action.payload, loading: false, error: null };
//     case FAILURE:
//       return { ...state, data: null, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };