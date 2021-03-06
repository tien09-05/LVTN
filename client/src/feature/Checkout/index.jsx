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
                                            S???? ng??????i ch??i
                                        </span>
                                        <div className="value">
                                            <Select
                                                placeholder="Cho??n s???? ng??????i ch??i"
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
                                            Voucher hi????n co??:
                                        </span>
                                        <div className="value  ">
                                            <Select
                                                placeholder="Cho??n Voucher"
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
                                            Gia?? ta??m ti??nh:
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
                                                    suffix={" VND/ng??????i )"}
                                                />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="d-flex  justify-content-between mt-2">
                                        <span className="label">
                                            Gia??m gia?? tha??nh vi??n:
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
                                            Voucher gia??m:
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
                                            Ba??n ??a?? ????????c gia??m :
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
                                            T????ng c????ng:
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
                                        ??i???u kho???n: <br />
                                        C???m ??n qu?? kh??ch,
                                        <br />
                                        We Escape s??? g???i ??i???n ????? x??c nh???n l???i
                                        vi???c ?????t ch??? c???a qu?? kh??ch t??? 3-6 ti???ng
                                        tr?????c gi??? ch??i. Trong tr?????ng h???p kh??ng
                                        li??n l???c ???????c qu?? 2 l???n, ch??ng t??i s???
                                        bu???c ph???i h???y vi???c ?????t tr?????c c???a qu??
                                        kh??ch. Xin qu?? kh??ch vui l??ng ?????n tr?????c
                                        gi??? ch??i 15 ph??t ????? ???????c ph??? bi???n lu???t
                                        ch??i
                                        <br />
                                        Ch?? ??: <br />
                                        - Gi?? v?? ??? tr??n l?? cho su???t ch??i 1
                                        ti???ng, vui l??ng tham kh???o b???ng gi?? cho
                                        su???t ch??i 2 ti???ng. (Gi?? tr??n ch??a bao
                                        g???m VAT v?? ho?? ????n xu???t trong ng??y) -
                                        <br />
                                        Gi?? v?? ??? tr??n ch??? mang t??nh ch???t tham
                                        kh???o, gi?? c?? th??? thay ?????i trong ng??y
                                        ho???c ng??y ngh??? l??? v?? c??c d???p ?????c bi???t
                                        kh??c. <br />- C??c su???t ?????c bi???t c???a WE-X
                                        t??? 21:00 tr??? ??i s??? c?? ????? d??i 2 ti???ng.
                                        H???n g???p qu?? kh??ch t???i We Escape! T??i
                                        ?????ng ??
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
                                            T??i ??????ng y??
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn__main text-center mx-auto mt-5 ">
                                        ??????t pho??ng
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <h3
                        style={{ marginTop: "100px", padding: "100px 0" }}
                        className="text-white container">
                        Ba??n v????n ch??a cho??n pho??ng ch??i{" "}
                        <Link to="/">V???? trang chu??</Link>
                    </h3>
                )
            ) : (
                <Redirect to="/" />
            )}
        </>
    );
};

export default Checkout;
