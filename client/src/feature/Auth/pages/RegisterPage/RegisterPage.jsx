import React, { useEffect } from "react";
import "./RegisterPage.css";

import RegisterForm from "../../components/ResgisterForm/RegisterForm";
import TypeCustomer from "../../../../components/TypeCustomer/TypeCustomer";
import { useHistory } from "react-router-dom";
const Register = () => {
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            history.push("/");
        }
    });
    return (
        <>
            <div
                className="banner__dk text-center"
                style={{ paddingTop: "100px" }}>
                <img src="assets/img/dangky/banner-dk.jpg" alt="" />

                <div
                    className="form-dangky__container container text-white py-3"
                    style={{ maxWidth: "1050px" }}>
                    <div>
                        <h2
                            className="text-center text-white"
                            style={{ color: "#fff" }}>
                            ĐĂNG KÍ THÀNH VIÊN
                        </h2>
                        <p className="text-center">
                            Đã có tài khoản? Đăng nhập
                        </p>
                    </div>

                    <div>
                        <RegisterForm />

                        <TypeCustomer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
