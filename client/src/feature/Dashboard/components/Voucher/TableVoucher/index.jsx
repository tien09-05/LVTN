import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { voucherApi } from "../../../../../api/voucherApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const TableVoucher = () => {
    const columns = [
        {
            title: "Tên voucher",
            dataIndex: "tenVoucher",
            key: "tenVoucher",
        },
        {
            title: "Giá trị",
            dataIndex: "giaTri",
            key: "giaTri",
        },
        {
            title: "Giá bán",
            dataIndex: "giaBan",
            key: "giaBan",
        },
        {
            title: "Hình ảnh",
            dataIndex: "hinhAnh",
            key: "hinhAnh",
            align: "center",

            render: (text) => (
                <img alt="" src={text} width="200" height="250" />
            ),
        },
        {
            title: "Mô Tả",
            dataIndex: "moTa",
            key: "moTa",
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Link
                        to={`/dashboard/voucher/edit/${record._id}`}
                        className="btn btn-warning ">
                        Edit
                    </Link>
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
    // function
    const handleDelete = (id) => {
        voucherApi.deleteVoucher(id).then((res) => {
            toast.success(res.message);
            setData(data.filter((item) => item._id !== id));
        });
    };

    useEffect(() => {
        voucherApi.getAllVouchers().then((res) => setData(res.data));
    }, []);
    return (
        <>
            {data ? (
                <>
                    <h2>Quản lí Voucher</h2>
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

export default TableVoucher;
