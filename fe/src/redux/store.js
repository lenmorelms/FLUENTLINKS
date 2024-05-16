import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { addCreativeLinksReducer, addSocialLinksReducer, creativeLinksReducer, deleteCreativeLinksReducer, deleteProfileReducer, deleteSocialLinksReducer, editCreativeLinksReducer, editProfileReducer, editSocialLinksReducer, forgotPasswordReducer, loginReducer, profileReducer, registerReducer, resendTokenReducer, resetPasswordReducer, socialLinksReducer, testReducer, verifyUserReducer } from "./Reducers";

const rootReducer = combineReducers({
    _test: testReducer,
    _login: loginReducer,
    _register: registerReducer,
    _forgotPassword: forgotPasswordReducer,
    _resetPassword: resetPasswordReducer,
    _verifyUser: verifyUserReducer,
    _resendToken: resendTokenReducer,
    _profile: profileReducer,
    _editProfile: editProfileReducer,
    _deleteProfile: deleteProfileReducer,
    _socialLinks: socialLinksReducer,
    _addSocialLinks: addSocialLinksReducer,
    _editSocialLinks: editSocialLinksReducer,
    _deleteSocialLinks: deleteSocialLinksReducer,
    _creativeLinks: creativeLinksReducer,
    _addCreativeLinks: addCreativeLinksReducer,
    _editCreativeLinks: editCreativeLinksReducer,
    _deleteCreativeLinks: deleteCreativeLinksReducer,
});

const middleware = [thunk];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;