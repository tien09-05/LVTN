import React from "react";

const PriceTable = () => {
    return (
        <>
            <div className="text-white font_bold  mt-4 mb-3 container ">
                <div>
                    <h3 className=" text-white ">Bảng Giá</h3>
                    <div style={{ textAlign: "center" }} className="row">
                        {/* Bảng trái */}
                        <div
                            style={{ border: "1px solid #5d5d5d" }}
                            className="mt-5 col-sm-12	col-md-12	col-lg-6	col-xl-6">
                            <div className=" text-center pt-5">1 TIẾNG</div>
                            <div className="entry mt-5">
                                <div>THỨ 2-6</div>
                                <div>
                                    <div
                                        style={{
                                            color: "#FFCD00",
                                            textAlign: "right",
                                        }}>
                                        129k / Người
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: "normal",
                                            fontSize: "10px",
                                            color: "#ccc",
                                            opacity: "0.5",
                                        }}>
                                        Thứ 4, 89K/người cho nhóm trên 4 người
                                    </div>
                                </div>
                            </div>
                            <div className="entry mt-5">
                                <div>THỨ 7-CN</div>
                                <div style={{ color: "#FFCD00" }}>
                                    149k / Người
                                </div>
                            </div>
                            <div
                                className="entry mt-5 "
                                style={{ borderBottom: "none" }}>
                                <div>NGÀY LỄ</div>
                                <div style={{ color: "#FFCD00" }}>
                                    169k / Người
                                </div>
                            </div>
                        </div>
                        {/* bảng phải */}
                        <div
                            style={{ border: "1px solid #5d5d5d" }}
                            className="mt-5 col-sm-12	col-md-12	col-lg-6	col-xl-6">
                            <div className=" text-center pt-5">2 TIẾNG</div>
                            <div className="entry mt-5">
                                <div>THỨ 2-6</div>
                                <div>
                                    <div
                                        style={{
                                            color: "#FFCD00",
                                            textAlign: "right",
                                        }}>
                                        169k / Người
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: "normal",
                                            fontSize: "10px",
                                            color: "#ccc",
                                            opacity: "0.5",
                                        }}>
                                        Thứ 4,129K/người cho nhóm trên 4 người
                                    </div>
                                </div>
                            </div>
                            <div className="entry mt-5">
                                <div>THỨ 7-CN</div>
                                <div style={{ color: "#FFCD00" }}>
                                    189k / Người
                                </div>
                            </div>
                            <div
                                className="entry mt-5"
                                style={{ borderBottom: "none" }}>
                                <div>NGÀY LỄ</div>
                                <div style={{ color: "#FFCD00" }}>
                                    209k / Người
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceTable;
