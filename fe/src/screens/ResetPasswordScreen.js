import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../redux/Actions";

const ResetPasswordScreen = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { token } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const resetPasswordData = useSelector((state) => state._resetPassword);
    const { data, error, loading } = resetPasswordData;
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const resetPasswordHandler = (e) => {
        e.preventDefault();
        if(password.length < 6) {
            alert("Password should be 6 characters or more")
        } else if(password !== confirmPassword) {
            alert("Passwords dont match");
        } else {
            dispatch(resetPassword(token, password));
        }
    };

    useEffect(() => {
        if(data && data.token) {
            navigate(redirect);
        }
    }, [data, navigate, redirect]);

    return (
        <>RESET PASSWORD</>
    )
};

export default ResetPasswordScreen;