import React from "react";
import "./DetailRoom.css";
import { StarFilled } from "@ant-design/icons";
const DetailRoom = (props) => {
    const { room } = props;
    const renderDoKho = () => {
        const result = [];
        for (let index = 0; index < room.doKho; index++) {
            result.push(<StarFilled style={{ color: "orange" }} key={index} />);
        }
        return result;
    };
    return (
        <>
            <div className="col-lg-7 mb-5 mb-lg-0">
                <h2 className="font-weight-bold mb-4 text-white">
                    {room.tenPhong}
                </h2>
                <h5 className="text-warning pb-4"> {room.theLoai} </h5>
                <p className="text-white " style={{ fontSize: "13px" }}>
                    {room.noiDung}
                </p>
                <div className="btn__group mt-5">
                    <a className="btn btn__main btn__book" href="#book">
                        ĐẶT CHỖ
                    </a>
                    <div
                        className="btn btn__main ml-4 hide-on-mobile btn__trailer"
                        style={{
                            background: "transparent",
                            color: "#eea326 !important",
                            border: "1px solid #eea326",
                        }}>
                        <i className="fas fa-play-circle mr-1" />
                        TRAILER
                    </div>
                    <br />
                    <span className="mt-2 d-block text-white small">
                        Đến chơi trả tiền, huỷ lịch không sao!
                    </span>
                </div>
            </div>

            <div className="col-lg-4">
                <table className="table_ct  w-100 caption text-white">
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    alt=""
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/assets/img/logo-nguoi.png`
                                    }
                                    className="rounded-circle"
                                    style={{
                                        width: "34px",
                                        marginRight: "10px",
                                    }}
                                />
                                Số Người
                            </td>
                            <td className="text-right"> {room.soNguoiToiDa}</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/logo-dc.png"
                                    }
                                    style={{
                                        width: "34px",
                                        marginRight: "10px",
                                    }}
                                    alt=""
                                />
                                Chi Nhánh
                            </td>
                            <td className="text-right">
                                We Escape Plus, We Escape BigC
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    alt=""
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/logo-okhoa.png"
                                    }
                                    style={{
                                        width: "34px",
                                        marginRight: "10px",
                                    }}
                                />
                                Độ Khó
                            </td>
                            <td className="text-right">{renderDoKho()}</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    alt=""
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/logo-dt.png"
                                    }
                                    style={{
                                        width: "34px",
                                        marginRight: "10px",
                                    }}
                                />
                                Độ Tuổi
                            </td>
                            <td className="text-right">{room.doTuoi} +</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DetailRoom;
