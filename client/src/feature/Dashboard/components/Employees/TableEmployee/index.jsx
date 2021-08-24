import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { employeeApi } from "../../../../../api/employeeApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const TableEmployee = () => {
    const columns = [
        {
            title: "Tên nhân viên",
            dataIndex: "tenNhanVien",
            key: "tenNhanVien",
        },
        {
            title: "Ngày sinh",
            dataIndex: "ngaySinh",
            key: "ngaySinh",
        },
        {
            title: "Giới tính",
            dataIndex: "gioiTinh",
            key: "gioiTinh",
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
            title: "Vị trí",
            dataIndex: "chucvu",
            key: "chucvu",
        },
        {
            title: "Chi nhánh",
            dataIndex: "chinhanh",
            key: "chinhanh",
            render: (text, record) => <div>{text.tenChiNhanh}</div>,
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => {
                if (auth && record._id === auth._id) {
                    return (
                        <Space size="middle">
                            <Link
                                to={`/dashboard/nhanvien/edit/${record._id}`}
                                className="btn btn-warning ">
                                Edit
                            </Link>
                        </Space>
                    );
                } else {
                    return (
                        <Space size="middle">
                            <Link
                                to={`/dashboard/nhanvien/edit/${record._id}`}
                                className="btn btn-warning ">
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(record._id)}
                                className="btn btn-danger ">
                                Delete
                            </button>
                        </Space>
                    );
                }
            },
        },
    ];

    // state
    const [data, setData] = useState(null);
    const auth = useSelector((state) => state.auth);
    // function
    const handleDelete = (id) => {
        employeeApi.deleteEmployee(id).then((res) => {
            toast.success(res.message);
            setData(data.filter((item) => item._id !== id));
        });
    };

    useEffect(() => {
        employeeApi.getAllEmployees().then((res) => setData(res.data));
    }, []);
    return (
        <>
            {data ? (
                <>
                    <h2>Quản lí nhân viên</h2>
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

export default TableEmployee;
