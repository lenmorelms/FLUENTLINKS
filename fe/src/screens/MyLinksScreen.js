import React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyLinksPage from "../components/MyLinksPage";

const MyLinksScreen = () => {
    return (
        <>
        <div className="App">
            <Header />
            <MyLinksPage />
            <Footer />
        </div>
        </>
    )
}

export default MyLinksScreen;