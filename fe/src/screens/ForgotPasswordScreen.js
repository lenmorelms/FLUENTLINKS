import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../redux/Actions";
import LoadingOval from "../components/reusables/LoadingOval";

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState();

    const dispatch = useDispatch();
    const forgotPasswordData = useSelector((state) => state._forgotPassword);
    const { data, loading, error, success} = forgotPasswordData;

    const forgotPasswordHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
    };
    return (
        <>
        <div className="">
            <div className="App-header">
                <div className="register-form col-lg-4 col-10">
                <div style={{ textAlign: "center", margin: "auto" }}>{loading && <LoadingOval color="#4fa94d" />}</div>
                    <h3 className="pt-4">Enter your email</h3>
                    {error && <span className="form-input-error">Email address does not exist</span>}
                    {success && <span className="form-input-success App-link">Password reset link sent to your email</span>}
                    <form className="pb-4" onSubmit={forgotPasswordHandler}>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">Continue</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
};

export default ForgotPasswordScreen;