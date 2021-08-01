import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: "#1e2023" }}>
            <div className="container" style={{ color: "#fff" }}>
                <div
                    className="d-flex justify-content-between align-items-center copyright"
                    style={{ height: "70px" }}>
                    <div className="copyright-text">
                        {" "}
                        Copyright 2019 by WEESCAPE. All Rights Reserved.
                    </div>
                    <div>
                        <a href="_#" className="m-1">
                            <i
                                className="fab fa-facebook-square"
                                style={{ fontSize: "24px", color: "#fff" }}
                            />
                        </a>
                        <a href="_#" className="m-1">
                            <i
                                className="fab fa-instagram-square"
                                style={{ fontSize: "24px", color: "#fff" }}
                            />
                        </a>
                        <a href="_#" className="m-1">
                            <i
                                className="fab fa-youtube-square"
                                style={{ fontSize: "24px", color: "#fff" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
