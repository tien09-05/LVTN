import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact" style={{ backgroundColor: "#3a3d42" }}>
            <div className="container">
                <div className="row">
                    <div
                        className="col-sm-12	col-md-12	col-lg-6	col-xl-6"
                        style={{ color: "#989898" }}>
                        <div className="mt-2">
                            <span className="font-weight-bold">
                                WE ESCAPE BÌNH THẠNH:{" "}
                            </span>
                            Bcons Tower, Đối diện số 179, Đường Nguyễn Văn
                            Thương,Bình Thạnh, Hồ Chí Minh
                        </div>
                        <div className="mt-2">
                            <span className="font-weight-bold">
                                WE ESCAPE BIGC:{" "}
                            </span>
                            :Lầu 1, 268 Tô Hiến Thành, Quận 10, Hồ Chí Minh
                        </div>
                        <div className="mt-2">
                            <span className="font-weight-bold">
                                WE ESCAPE PLUS:{" "}
                            </span>
                            Tầng 3, 320 Lê Văn Sỹ, Tân Bình, Hồ Chí Minh
                        </div>
                        <div className="mt-4">
                            <span className="font-weight-bold">Email: </span>
                            contact@weescape.vn
                        </div>
                        <div className="mt-2">
                            <span className="font-weight-bold">SĐT: </span>
                            024 7774 4888
                        </div>
                    </div>
                    <div
                        className="col-sm-12	col-md-12	col-lg-6	col-xl-6 hide-on-mobile"
                        style={{ color: "#fff" }}>
                        <div className="row">
                            <div className="col-sm-12	col-md-12	col-lg-6	col-xl-6">
                                <ul style={{ listStyle: "none" }}>
                                    <li className="font-weight-bold mb-3">
                                        Giới thiệu
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="_#"
                                            style={{ color: "inherit" }}>
                                            Các thử thách
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="_#"
                                            style={{ color: "inherit" }}>
                                            Thành viên
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="_#"
                                            style={{ color: "inherit" }}>
                                            Đồ lưu niệm
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-12	col-md-12	col-lg-6	col-xl-6">
                                <ul style={{ listStyle: "none" }}>
                                    <li className="font-weight-bold mb-3">
                                        Dịch vụ
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="_#"
                                            style={{ color: "inherit" }}>
                                            Franchise
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
