import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { verifyUser } from "../redux/Actions";

const VerifyScreen = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const verifyUserData = useSelector((state) => state._verifyUser);
    const { data, loading, error } = verifyUserData;
    const verifyHandle = (e) => {
        e.preventDefault();
        dispatch(verifyUser(token));
    };

    useEffect(() => {
        if (data && data.token) {
            navigate(redirect);
        }
    }, [data, navigate, redirect]);

    return (
        <>VERIFY PASSWORD</>
    )
};

export default VerifyScreen;