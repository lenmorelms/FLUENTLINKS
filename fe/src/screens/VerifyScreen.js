import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { verifyUser } from "../redux/Actions";
import LoadingOval from "../components/reusables/LoadingOval";

const VerifyScreen = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const verifyUserData = useSelector((state) => state._verifyUser);
    const { data, loading, error } = verifyUserData;
    const verifyHandler = (e) => {
        e.preventDefault();
        dispatch(verifyUser(token));
    };

    useEffect(() => {
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
                    <h3 className="pt-4">Verify your account</h3>
                    {error && <span className="form-input-error">Failed to verify account, try again.</span>}
                    <form className="pb-4" onSubmit={verifyHandler}>
                        <button type="submit" class="btn btn-success">
                            VERIFY
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
};

export default VerifyScreen;