import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { checkoutApi } from "../../../../../api/checkoutApi";
import { customerApi } from "../../../../../api/customerApi";
import { typeCustomerApi } from "../../../../../api/typeCustomerApi";
import { toast } from "react-toastify";
const TableCheckout = () => {
    const columns = [
        {
            title: "Số người chơi",
            dataIndex: "soNguoiChoi",
            key: "soNguoiChoi",
        },
        {
            title: "Ngày chơi",
            dataIndex: "ngayChoi",
            key: "ngayChoi",
        },
        {
            title: "Giờ chơi",
            dataIndex: "gioChoi",
            key: "gioChoi",
        },
        {
            title: "Tiền Tạm Tính",
            dataIndex: "tienTamTinh",
            key: "tienTamTinh",
        },
        {
            title: "Tổng Tiền",
            dataIndex: "tongTien",
            key: "tongTien",
        },
        {
            title: "Tên khách hàng",
            dataIndex: "khachhang",
            key: "khachhang",
            render: (text, record) => <div>{text.tenKhachHang}</div>,
        },
        {
            title: "Phòng",
            dataIndex: "phong",
            key: "phong",
            render: (text, record) => <div>{text.tenPhong}</div>,
        },
        {
            title: "Chi nhánh",
            dataIndex: "chinhanh",
            key: "chinhanh",
            render: (text, record) => <div>{text.tenChiNhanh}</div>,
        },
        {
            title: "Địa chỉ",
            dataIndex: "chinhanh",
            key: "chinhanh",
            render: (text, record) => <div>{text.diaChi}</div>,
        },
        {
            title: "Trạng thái",
            dataIndex: "trangThai",
            key: "trangThai",
            render: (text, record) => (
                <div>
                    {text === "Chưa xác nhận" ? (
                        <Tag
                            color="red"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                confirmCheckout(record._id, "Đã xác nhận")
                            }>
                            {text}
                        </Tag>
                    ) : text === "Đã xác nhận" ? (
                        <Tag
                            color="warning"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                confirmCheckout(record._id, "Hoàn thành")
                            }>
                            {text}
                        </Tag>
                    ) : (
                        <Tag color="green">{text}</Tag>
                    )}
                </div>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <button
                    onClick={() => handleDelete(record._id)}
                    className="btn btn-danger ">
                    Delete
                </button>
            ),
        },
    ];

    // state
    const [data, setData] = useState(null);
    // function
    const handleDelete = (id) => {
        checkoutApi.deleteCheckout(id).then((res) => {
            toast.success(res.message);
            setData(data.filter((item) => item._id !== id));
        });
    };

    function compare(a, b) {
        if (a.dieuKien < b.dieuKien) {
            return 1;
        }
        if (a.dieuKien > b.dieuKien) {
            return -1;
        }
        return 0;
    }
    function compareDate(a, b) {
        if (a.ngayChoi < b.ngayChoi) {
            return 1;
        }
        if (a.ngayChoi > b.ngayChoi) {
            return -1;
        }
        return 0;
    }
    const confirmCheckout = async (id, trangThai) => {
        const resUpdateCheckout = await checkoutApi.updateCheckout(
            id,
            trangThai
        );
        toast.success(resUpdateCheckout.message);
        setData(
            data.map((item) => {
                if (item._id === id) item.trangThai = trangThai;
                return item;
            })
        );

        if (trangThai === "Hoàn thành") {
            const typeCustomers = await typeCustomerApi.getAllTypeCustomer();

            const tongChiTieu =
                resUpdateCheckout.donDatphong.khachhang.tongChiTieu +
                resUpdateCheckout.donDatphong.tongTien;
            const diemTichLuy =
                resUpdateCheckout.donDatphong.khachhang.diemTichLuy +
                resUpdateCheckout.donDatphong.tongTien / 10000;
            const loaiKhachHang = typeCustomers.data
                .sort(compare)
                .find((item) => tongChiTieu > item.dieuKien);

            const dataUpdateKhachHang = {
                tongChiTieu,
                diemTichLuy,
                loaiKhachHang: loaiKhachHang._id,
            };

            await customerApi.updateCustomer(
                resUpdateCheckout.donDatphong.khachhang._id,
                dataUpdateKhachHang
            );
        }
    };
    useEffect(() => {
        checkoutApi.getAllCheckouts().then((res) => setData(res.data));
    }, []);
    return (
        <>
            {data ? (
                <>
                    <h2>Quản lí đơn đặt phòng</h2>
                    <h4>Chưa hoàn thành</h4>
                    <Table
                        columns={columns}
                        dataSource={data
                            .sort(compareDate)
                            .filter((item) => item.trangThai !== "Hoàn thành")}
                        rowKey={(record) => record._id}
                    />
                    <h4>Đã hoàn thành</h4>
                    <Table
                        columns={columns}
                        dataSource={data
                            .sort(compareDate)
                            .filter((item) => item.trangThai === "Hoàn thành")}
                        rowKey={(record) => record._id}
                    />
                </>
            ) : (
                <div>Loading....</div>
            )}
        </>
    );
};

export default TableCheckout;
