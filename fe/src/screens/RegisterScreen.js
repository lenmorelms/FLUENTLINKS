import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { register, resendToken } from "../redux/Actions";

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showSendCode, setShowSendCode] = useState(false);

    const countryOptions = useMemo(() => countryList().getData(), []);
    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'Rather Not Say', label: 'Rather Not Say'}
    ];
    const dispatch = useDispatch();

    const registerData = useSelector((state) => state._register);
    const { data, loading, error } = registerData;
    
    const resendTokenData = useSelector((state) => state._resendToken);
    const { data: tokenData, loading: tokenLoading, error: tokenError } = resendTokenData;

    const countryHandler = (value) => {
        setCountry(value)
    }
    const genderHandler = (value) => {
        setGender(value)
    }
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const registerHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords dont match");
        } else if(!document.getElementById("terms").checked) {
            alert("Accept terms");
        } else {
            dispatch(register(email, username, age, gender.label, country.label, password));
        }
    };
    const resendTokenHandler = (e) => {
        e.preventDefault();
        dispatch(resendToken(data._id));
    }

    useEffect(() => {
        if(data.verificationToken) setShowSendCode(true)
    }, [data]);

    return (
        <>REGISTER</>
    )
};

export default RegisterScreen;