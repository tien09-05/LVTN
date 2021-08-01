import React, { useEffect, useState } from "react";
import { checkoutApi } from "../../api/checkoutApi";
import CheckOutInFo from "./components/CheckOutInFo";
import { toast } from "react-toastify";
import { Select } from "antd";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { removeVoucherAction } from "../Auth/authSlice";
import { Link, Redirect } from "react-router-dom";
const { Option } = Select;
const Checkout = () => {
    const dispatch = useDispatch();
    // redux
    const { auth } = useSelector((state) => state);

    // state
    const [checkout, setCheckOut] = useState(null);
    const [soNguoiChoi, setSoNguoiChoi] = useState(1);
    const [voucher, setVoucher] = useState({});

    let tienTamTinh = 0;
    let tienGiamThanhVien = 0;
    let tongTien = 0;
    let tienGiamVoucher = voucher.giaTri ? voucher.giaTri : 0;
    if (checkout && !auth.hasOwnProperty("tenNhanVien")) {
        tienTamTinh = checkout.room.gia * soNguoiChoi;
        tienGiamThanhVien =
            tienTamTinh * checkout.auth.loaiKhachHang.quyenLoi.giamGia;
        tongTien = tienTamTinh - tienGiamThanhVien - tienGiamVoucher;
        if (tongTien <= 0) tongTien = 0;
    }

    useEffect(() => {
        setCheckOut(JSON.parse(localStorage.getItem("checkout")));
    }, []);

    const renderOptionSoNguoiChoi = () => {
        let result = [];
        for (let index = 0; index < checkout.room.soNguoiToiDa; index++) {
            result.push(
                <Option value={index + 1} key={index + 1}>
                    {index + 1}
                </Option>
            );
        }
        return result;
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const data = {
            soNguoiChoi,
            ngayChoi: checkout.date,
            gioChoi: checkout.time,
            tienTamTinh,
            tienGiamThanhVien,
            tongTien,
            phong: checkout.room._id,
            khachhang: checkout.auth._id,
            chinhanh: checkout.chinhanh._id,
            voucher: voucher._id,
        };
        const res = await checkoutApi.createCheckout(data);
        if (res.success) {
            dispatch(removeVoucherAction({ voucher: voucher._id }));
            toast.success(res.message);
            setTimeout(() => {
                window.location.replace("/");
            }, 1000);
        }
    };
    return (
        <>
            {auth && auth.hasOwnProperty("tenKhachHang") ? (
                checkout ? (
                    <div
                        className="container text-white"
                        style={{ paddingTop: "120px", maxWidth: "1000px" }}>
                        <div className="row">
                            <CheckOutInFo
                                room={checkout.room}
                                chinhanh={checkout.chinhanh}
                                date={checkout.date}
                                time={checkout.time}
                            />
                            <hr className="mt-5" />
                            <div className="col-12 d-flex justify-content-between my-4">
                                <div
                                    className="col-7 "
                                    style={{ width: "36%" }}>
                                    <div className=" d-flex justify-content-between">
                                        <span className="label">
                                            Số người chơi
                                        </span>
                                        <div className="value">
                                            <Select
                                                placeholder="Chọn số người chơi"
                                                onChange={(value) =>
                                                    setSoNguoiChoi(value)
                                                }
                                                style={{ width: 200 }}>
                                                {renderOptionSoNguoiChoi()}
                                            </Select>
                                        </div>
                                    </div>

                                    <div className=" d-flex justify-content-between mt-3">
                                        <span className="label">
                                            Voucher hiện có:
                                        </span>
                                        <div className="value  ">
                                            <Select
                                                placeholder="Chọn Voucher"
                                                onChange={(value) => {
                                                    const voucherCurrent =
                                                        auth.voucher.find(
                                                            (item) =>
                                                                item._id ===
                                                                value
                                                        );
                                                    setVoucher(voucherCurrent);
                                                }}
                                                style={{ width: 200 }}>
                                                {auth.voucher.map((item) => (
                                                    <Option
                                                        value={item._id}
                                                        key={item._id}>
                                                        {item.tenVoucher}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-4">
                                    <div className="d-flex  justify-content-between">
                                        <span className="label">
                                            Giá tạm tính:
                                        </span>
                                        <div className="value">
                                            <span href="/games?places=4">
                                                <NumberFormat
                                                    value={tienTamTinh}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    suffix={" VND"}
                                                />
                                            </span>
                                            <br />
                                            <span
                                                href="/games?places=4"
                                                className="d-inline">
                                                <NumberFormat
                                                    value={checkout.room.gia}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"( "}
                                                    suffix={" VND/người )"}
                                                />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="d-flex  justify-content-between mt-2">
                                        <span className="label">
                                            Giảm giá thành viên:
                                        </span>
                                        <div className="value">
                                            <span href="/games?places=4">
                                                <NumberFormat
                                                    value={tienGiamThanhVien}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"-"}
                                                    suffix={" VND "}
                                                />
                                                {`(${
                                                    checkout.auth.loaiKhachHang
                                                        .quyenLoi.giamGia * 100
                                                }%)`}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex  justify-content-between mt-2">
                                        <span className="label">
                                            Voucher giảm:
                                        </span>
                                        <div className="value">
                                            <NumberFormat
                                                value={tienGiamVoucher}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"-"}
                                                suffix={" VND"}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex  justify-content-between mt-2">
                                        <span className="label">
                                            Bạn đã được giảm :
                                        </span>
                                        <div className="value">
                                            <NumberFormat
                                                value={
                                                    tienGiamThanhVien +
                                                    tienGiamVoucher
                                                }
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"-"}
                                                suffix={" VND"}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex  justify-content-between mt-2">
                                        <span className="label">
                                            Tổng cộng:
                                        </span>
                                        <div className="value">
                                            <NumberFormat
                                                value={tongTien}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                suffix={" VND"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form
                                style={{ backgroundColor: "#000" }}
                                className="p-5"
                                onSubmit={handleSubmitForm}>
                                <div className="row">
                                    <div
                                        className="term mt-5"
                                        style={{ textAlign: "left" }}>
                                        Điều khoản: <br />
                                        Cảm ơn quý khách,
                                        <br />
                                        We Escape sẽ gọi điện để xác nhận lại
                                        việc đặt chỗ của quý khách từ 3-6 tiếng
                                        trước giờ chơi. Trong trường hợp không
                                        liên lạc được quá 2 lần, chúng tôi sẽ
                                        buộc phải hủy việc đặt trước của quý
                                        khách. Xin quý khách vui lòng đến trước
                                        giờ chơi 15 phút để được phổ biến luật
                                        chơi
                                        <br />
                                        Chú ý: <br />
                                        - Giá vé ở trên là cho suất chơi 1
                                        tiếng, vui lòng tham khảo bảng giá cho
                                        suất chơi 2 tiếng. (Giá trên chưa bao
                                        gồm VAT và hoá đơn xuất trong ngày) -
                                        <br />
                                        Giá vé ở trên chỉ mang tính chất tham
                                        khảo, giá có thể thay đổi trong ngày
                                        hoặc ngày nghỉ lễ và các dịp đặc biệt
                                        khác. <br />- Các suất đặc biệt của WE-X
                                        từ 21:00 trở đi sẽ có độ dài 2 tiếng.
                                        Hẹn gặp quý khách tại We Escape! Tôi
                                        đồng ý
                                    </div>
                                    <div className="form-check text-center w-100 mt-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck1"
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                float: "none",
                                            }}
                                        />
                                        <label className="form-check-label ml-2 pt-1">
                                            Tôi đồng ý
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn__main text-center mx-auto mt-5 ">
                                        Đặt phòng
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <h3
                        style={{ marginTop: "100px", padding: "100px 0" }}
                        className="text-white container">
                        Bạn vẫn chưa chọn phòng chơi{" "}
                        <Link to="/">Về trang chủ</Link>
                    </h3>
                )
            ) : (
                <Redirect to="/" />
            )}
        </>
    );
};

export default Checkout;
