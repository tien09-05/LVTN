import { StarFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

import "./DifferentProduct.css";
const DifferentProduct = ({ rooms }) => {
    const renderDoKho = (doKho) => {
        const result = [];
        for (let index = 0; index < doKho; index++) {
            result.push(<StarFilled style={{ color: "orange" }} key={index} />);
        }
        return result;
    };
    return (
        <>
            <div className="container challenges-diff">
                <div>
                    <h3 className=" text-white">CÁC THỬ THÁCH KHÁC </h3>
                </div>
                <div className="mt-4 text-warning">
                    {rooms.map((room) => (
                        <div
                            className=" challenges-diff-product mt-4"
                            key={room._id}>
                            <div>
                                <Link
                                    to={`/rooms/${room._id}`}
                                    className="d-block"
                                    style={{ marginRight: "20px" }}>
                                    <img
                                        src={room.hinhAnh}
                                        alt=""
                                        className="challenges-diff__img "
                                    />
                                </Link>
                            </div>
                            <div className="ml-4 challenges-diff__info">
                                <div>
                                    <Link
                                        className=" text-decoration-none"
                                        to={`/rooms/${room._id}`}>
                                        <h2 className="text-white challenges-diff__name">
                                            {room.tenPhong}
                                        </h2>
                                    </Link>
                                </div>
                                <div className="mt-2 mb-2  ">
                                    <span>{renderDoKho(room.doKho)}</span>
                                    <br />
                                    <br />
                                    <span>{room.theLoai}</span>
                                </div>
                                <div className="mt-3">
                                    <span>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/img/logo_songuoi.png"
                                            }
                                            alt=""
                                            style={{ marginRight: "12px" }}
                                        />
                                        {room.soNguoiToiDa} người
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <span>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/img/logo_dv.png"
                                            }
                                            alt=""
                                            style={{ marginRight: "19px" }}
                                        />
                                        {room.chinhanh.map(
                                            (item) => item.tenChiNhanh + ", "
                                        )}
                                    </span>
                                </div>
                                <div className="mt-5 ">
                                    <Link
                                        to={`/rooms/${room._id}`}
                                        className="text-warning  pl-4">
                                        Xem Chi Tiết +
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DifferentProduct;
