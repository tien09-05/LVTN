import React from "react";
import { useParams } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
const Auth = () => {
    const { type } = useParams();
    return <>{type === "login" ? <LoginPage /> : <RegisterPage />}</>;
};

export default Auth;
