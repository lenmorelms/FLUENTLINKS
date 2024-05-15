import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../redux/Actions";

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState();

    const dispatch = useDispatch();
    const forgotPasswordData = useSelector((state) => state._forgotPassword);
    const { data, loading, error } = forgotPasswordData;
    const forgotPasswordHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
    };
    return (
        <>FORGOT PASSWORD</>
    )
};

export default ForgotPasswordScreen;