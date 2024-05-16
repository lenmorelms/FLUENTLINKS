import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingOval from "../components/reusables/LoadingOval";
import { resetPassword } from "../redux/Actions";

const ResetPasswordScreen = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [inputError, setInputError] = useState("");
    const { token } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const resetPasswordData = useSelector((state) => state._resetPassword);
    const { data, error, loading, success } = resetPasswordData;
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const resetPasswordHandler = (e) => {
        e.preventDefault();
        setInputError("");
        if(password.length < 6) {
            setInputError("Password should be 6 characters or more");
        } else if(password !== confirmPassword) {
            setInputError("Passwords dont match");
        } else {
            dispatch(resetPassword(token, password));
        }
    };

    useEffect(() => {
        if(error) setInputError("Failed to reset password, try again");
        if(data && data.token) {
            navigate(redirect);
        }
    }, [data, navigate, redirect, error]);

    return (
        <>
        <div className="">
            <div className="App-header">
                <div className="register-form col-lg-4 col-10">
                    <div style={{ textAlign: "center", margin: "auto" }}>{loading && <LoadingOval color="#4fa94d" />}</div>
                    <h3 className="pt-4">Reset your password</h3>
                    <span className="form-input-error">{inputError}</span>
                    <form className="pb-4" onSubmit={resetPasswordHandler}>
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
                    <label className="form-label">
                        {success &&  <>Password reset successfully <Link to='/signin' className="App-link">signin</Link></>}
                    </label>
                </div>
            </div>
        </div>
        </>
    )
};

export default ResetPasswordScreen;