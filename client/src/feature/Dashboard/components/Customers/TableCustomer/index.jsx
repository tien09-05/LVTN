import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { customerApi } from "../../../../../api/customerApi";
import { toast } from "react-toastify";
const TableCustomer = () => {
    const columns = [
        {
            title: "Tên Khách hàng",
            dataIndex: "tenKhachHang",
            key: "tenKhachHang",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Số điện thoại",
            dataIndex: "soDienThoai",
            key: "soDienThoai",
        },
        {
            title: "Tổng chi tiêu",
            dataIndex: "tongChiTieu",
            key: "tongChiTieu",
        },
        {
            title: "Điểm tích lũy",
            dataIndex: "diemTichLuy",
            key: "diemTichLuy",
        },
        {
            title: "Loại khách hàng",
            dataIndex: "loaiKhachHang",
            key: "loaiKhachHang",
            render: (text, record) => <div>{text.tenLoai}</div>,
        },
        {
            title: "Voucher hiện có",
            dataIndex: "voucher",
            key: "voucher",
            render: (text, record) => {
                return text.map((item) => (
                    <div key={item._id}>
                        {item.tenVoucher ? item.tenVoucher : "Không có voucher"}
                    </div>
                ));
            },
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <button
                        onClick={() => handleDelete(record._id)}
                        className="btn btn-danger">
                        Delete
                    </button>
                </Space>
            ),
        },
    ];

    // state
    const [data, setData] = useState(null);

    useEffect(() => {
        customerApi.getAllCustomers().then((res) => setData(res.data));
    }, []);
    // function
    const handleDelete = (id) => {
        customerApi.deleteCustomer(id).then((res) => {
            toast.success(res.message);
            setData(data.filter((item) => item._id !== id));
        });
    };

    return (
        <>
            {data ? (
                <>
                    <h2>Quản lí Customer</h2>
                    <Table
                        columns={columns}
                        dataSource={data}
                        rowKey={(record) => record._id}
                    />
                </>
            ) : (
                <div>Loading....</div>
            )}
        </>
    );
};

export default TableCustomer;
