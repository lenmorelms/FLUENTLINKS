import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { login } from "../redux/Actions";
import LoadingOval from "../components/reusables/LoadingOval";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputError, setInputError] = useState("");
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
        // setInputError("");
        dispatch(login(email, password));
    };

    useEffect(() => {
        if(error) setInputError("Wrong username/password");
        if (data && data.token) {
          navigate(redirect);
        }
    }, [data, navigate, redirect]);
    
    return (
        <>
        <div className="">
            <div className="App-header">
                <div className="register-form col-lg-4 col-10">
                <div style={{ textAlign: "center", margin: "auto" }}>{loading && <LoadingOval color="#4fa94d" />}</div>
                    <h3 className="pt-4">Sign in to your account</h3>
                    <span className="form-input-error">{inputError}</span>
                    <form onSubmit={loginHandler}>
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
                            <label for="password" className="form-label">Password</label>
                            <Link to="/forgot-password" className="App-link plain-button" style={{ float: "right" }}>Forgot password?</Link>
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
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                    <hr />
                    <div className="signup-text">
                        <label className="form-label">
                            Don't have an account <Link to='/signup' className="App-link">signup</Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default LoginScreen;