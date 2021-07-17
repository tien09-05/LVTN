import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { typeCustomerApi } from "../../../../../api/typeCustomerApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const TableTypeCustomer = () => {
    const columns = [
        {
            title: "Tên Loại",
            dataIndex: "tenLoai",
            key: "tenLoai",
        },
        {
            title: "Điều kiện",
            dataIndex: "dieuKien",
            key: "dieuKien",
        },
        {
            title: "Giảm Giá",
            dataIndex: "quyenLoi",
            key: "quyenLoi",
            render: (text, record) => <div>{text.giamGia * 100}%</div>,
        },
        {
            title: "Tích điểm",
            dataIndex: "quyenLoi",
            key: "quyenLoi",
            render: (text, record) => <div>x{text.tichDiem}</div>,
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Link
                        to={`/dashboard/loaikhachhang/edit/${record._id}`}
                        className="btn btn-warning ">
                        Edit
                    </Link>
                    <button
                        onClick={() => handleDelete(record._id)}
                        className="btn btn-danger ">
                        Delete
                    </button>
                </Space>
            ),
        },
    ];

    // state
    const [data, setData] = useState(null);
    // function
    const handleDelete = (id) => {
        typeCustomerApi.deleteTypeCustomer(id).then((res) => {
            toast.success(res.message);
            setData(data.filter((item) => item._id !== id));
        });
    };

    useEffect(() => {
        typeCustomerApi.getAllTypeCustomer().then((res) => setData(res.data));
    }, []);
    return (
        <>
            {data ? (
                <>
                    <h2>Quản lí loại khách hàng</h2>
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

export default TableTypeCustomer;
