import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { branchApi } from "../../../../../api/branchApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const TableBranch = () => {
    const columns = [
        {
            title: "Tên chi nhánh",
            dataIndex: "tenChiNhanh",
            key: "tenChiNhanh",
        },
        {
            title: "Địa chỉ",
            dataIndex: "diaChi",
            key: "diaChi",
        },
        {
            title: "Số điện thoại",
            dataIndex: "soDienThoai",
            key: "soDienThoai",
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Link
                        to={`/dashboard/chinhanh/edit/${record._id}`}
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
        branchApi.deleteBranch(id).then((res) => {
            toast.success(res.message);
            setData(data.filter((item) => item._id !== id));
        });
    };

    useEffect(() => {
        branchApi.getAllBranches().then((res) => setData(res.data));
    }, []);
    return (
        <>
            {data ? (
                <>
                    <h2>Quản lí chi nhánh</h2>
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

export default TableBranch;
