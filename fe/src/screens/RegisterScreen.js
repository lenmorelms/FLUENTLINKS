import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { register, resendToken } from "../redux/Actions";
import { Link } from "react-router-dom";
import LoadingOval from "../components/reusables/LoadingOval";

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
    const [inputError, setInputError] = useState("");

    const countryOptions = useMemo(() => countryList().getData(), []);
    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'Rather Not Say', label: 'Rather Not Say'}
    ];
    const dispatch = useDispatch();

    const registerData = useSelector((state) => state._register);
    const { data, loading, error, success } = registerData;
    
    const resendTokenData = useSelector((state) => state._resendToken);
    const { data: tokenData, loading: tokenLoading, error: tokenError } = resendTokenData;

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const registerHandler = (e) => {
        e.preventDefault();
        setInputError("");
        if(username.length < 3) {
            setInputError("Username should not be less than 3 characters"); 
        } else if(password !== confirmPassword) {
            setInputError("Passwords dont match");
        }
        else if(password.length < 6) {
            setInputError("Passwords should not be less than 6 characters");
        } else {
            dispatch(register(email, username, age, gender, country, password));
        }
    };
    const resendTokenHandler = (e) => {
        e.preventDefault();
        setInputError("");
        dispatch(resendToken(data._id));
    };

    useEffect(() => {
        if(error) setInputError("Username/Email should be unique");
        if(tokenError) setInputError("Failed to resend link, try again.")
        if(data && data.verificationToken) setShowSendCode(true);
    }, [data, error, tokenError]);

    return (
        <>
        <div className="">
            <div className="App-header">
                <div className="register-form col-lg-4 col-10">
                    <div style={{ textAlign: "center", margin: "auto" }}>{(loading || tokenLoading) && <LoadingOval color="#4fa94d" />}</div>
                    <h3 className="pt-4">Create a new account</h3>
                    <span className="form-input-error">{inputError}</span>
                    {success && <span className="form-input-success App-link">Verification link sent to your email</span>}
                    <form onSubmit={registerHandler}>
                        <div className="mb-3">
                            <label for="username" className="form-label">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="username" 
                                name="username"
                                value={username}
                                onFocus={() => setInputError("")}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email"
                                value={email}
                                onFocus={() => setInputError("")}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label><br />
                            <div className="input-group">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className="form-control" 
                                id="password" 
                                name="password"
                                value={password}
                                onFocus={() => setInputError("")}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary margin"
                                onClick={handlePasswordToggle}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="confirmPassword" className="form-label">Confirm Password</label>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className="form-control" 
                                id="confirmPassword" 
                                name="confirm-password"
                                value={confirmPassword}
                                onFocus={() => setInputError("")}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Create account
                        </button>
                    </form>
                    <hr />
                    <div className="signup-text">
                        <label className="form-label">
                            Already have an account <Link to='/signin' className="App-link">signin</Link>
                        </label>
                        <div style={{textAlign: "center"}}>
                            {showSendCode && 
                                <button className="plain-button App-link" onClick={resendTokenHandler}>
                                    Resend Verification Code
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default RegisterScreen;