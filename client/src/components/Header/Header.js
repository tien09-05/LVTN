import React from "react";
import "./Header.css";
import { toast } from "react-toastify";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../feature/Auth/authSlice";
const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector((state) => state.auth);

    const Logout = (e) => {
        e.preventDefault();
        dispatch(logout());
        localStorage.removeItem("auth");
        toast("Đã đăng xuất");
        if (
            window.location.pathname === "/checkout" ||
            window.location.pathname.includes("/dashboard")
        )
            history.push("/");
    };
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            style={{ height: "100px", backgroundColor: "black" }}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/img/logo-new-pc.png"
                        }
                        width={240}
                        alt=""
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse text-right py-4 justify-content-end"
                    id="navbarSupportedContent"
                    style={{ backgroundColor: "#000" }}>
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item dropdown mx-3">
                            <a
                                className="nav-link dropdown-toggle  text-white"
                                href="_#"
                                id="navbarDropdown"
                                data-toggle="dropdown">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/flag-vie.png"
                                    }
                                    className="rounded-circle"
                                    width={28}
                                    alt=""
                                />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-right "
                                aria-labelledby="navbarDropdown">
                                <a
                                    className="dropdown-item text-white text-right"
                                    href="_#">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/img/flag-eng.png"
                                        }
                                        className="rounded-circle"
                                        width={28}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </li>

                        {window.location.pathname.includes("/dashboard") ? (
                            ""
                        ) : (
                            <>
                                <li className="dropdown-menu-right  nav-item dropdown mx-3">
                                    <a
                                        className="nav-link dropdown-toggle text-white"
                                        href="_#"
                                        id="navbarDropdown"
                                        data-toggle="dropdown">
                                        Hồ Chí Minh
                                    </a>
                                    <div
                                        className="dropdown-menu text-right"
                                        aria-labelledby="navbarDropdown">
                                        <a
                                            className="dropdown-item text-white"
                                            href="_#">
                                            Hà Nội
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown-menu-right  nav-item mx-3 hide-on-mobile">
                                    <a
                                        className="nav-link btn btn__main"
                                        href="_#">
                                        Đặt nhanh
                                    </a>
                                </li>
                            </>
                        )} */}
                        <li className="dropdown-menu-right  nav-item dropdown mx-3">
                            {auth ? (
                                <>
                                    <a
                                        className="nav-link dropdown-toggle text-white"
                                        href="_#"
                                        id="navbarDropdown"
                                        data-toggle="dropdown">
                                        Hi{" "}
                                        {auth.tenKhachHang || auth.tenNhanVien}
                                    </a>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown">
                                        <Link
                                            className="dropdown-item text-white my-2"
                                            to={`/member/account`}>
                                            Thông tin cá nhân
                                        </Link>
                                        <Link
                                            className="dropdown-item text-white my-2"
                                            to={`/member/typeCustomer`}>
                                            Quyền lợi thành viên
                                        </Link>
                                        <Link
                                            className="dropdown-item text-white my-2"
                                            to={`/voucher`}>
                                            Đổi Voucher
                                        </Link>
                                        <button
                                            className="dropdown-item text-white my-2"
                                            onClick={Logout}>
                                            Đăng Xuất
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <a
                                        className="nav-link dropdown-toggle text-white"
                                        href="_#"
                                        id="navbarDropdown"
                                        data-toggle="dropdown">
                                        <i
                                            className="far fa-user rounded-circle"
                                            style={{ fontSize: "22px" }}
                                        />
                                    </a>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown">
                                        <Link
                                            className="dropdown-item text-white my-2"
                                            to="/auth/register">
                                            Đăng ký
                                        </Link>
                                        <Link
                                            className="dropdown-item text-white my-2"
                                            to="/auth/login">
                                            Đăng nhập
                                        </Link>
                                        <Link
                                            className="dropdown-item text-white my-2"
                                            to="/auth/login/nhanvien">
                                            Đăng nhập nhân viên
                                        </Link>
                                    </div>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
