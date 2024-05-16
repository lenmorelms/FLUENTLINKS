import React, { useEffect } from "react";
import logo from '../logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { test } from "../redux/Actions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const testData = useSelector((state) => state._test);
  const { data, loading, error } = testData;

  useEffect(() => {
    dispatch(test());
  }, [dispatch])
    return (
        <>
        <Header />
        <LandingPage />
        <Footer />
        </>
    )
}

export default HomeScreen;