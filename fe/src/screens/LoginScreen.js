import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/Actions";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const loginData = useSelector((state) => state._login);
    const { data, loading, error } = loginData;

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    useEffect(() => {
        if (data && data.token) {
          navigate(redirect);
        }
    }, [data, navigate, redirect]);
    
    return (
        <>LOGIN</>
    )
};

export default LoginScreen;