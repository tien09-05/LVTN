import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = () => {
    const history = useHistory();
    const isNhanVien =
        window.location.pathname === "/auth/login/nhanvien" ? true : false;

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            history.push("/");
        }
    });
    return (
        <>
            <div>
                <div
                    className="banner__dk text-center"
                    style={{ paddingTop: "100px" }}>
                    <img src="assets/img/dangky/banner-dk.jpg" alt="" />
                </div>

                <LoginForm isNhanVien={isNhanVien} />
            </div>
        </>
    );
};

export default LoginPage;
