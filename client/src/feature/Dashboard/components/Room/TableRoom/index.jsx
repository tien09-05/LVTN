import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { roomsApi } from "../../../../../api/roomsApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const TableRoom = () => {
    let stt = 0;
    const columns = [
        {
            title: "STT",
            dataIndex: "STT",
            key: "STT",
            width: "3%",
            align: "center",
            render: (text) => stt++,
        },
        {
            title: "Tên phòng",
            dataIndex: "tenPhong",
            width: "7%",
            align: "center",
            key: "tenPhong",
        },
        {
            title: "Thể loại",
            dataIndex: "theLoai",
            width: "7%",
            align: "center",
            key: "theLoai",
        },
        {
            title: "Nội dung",
            width: "30%",
            dataIndex: "noiDung",
            key: "noiDung",
        },
        {
            title: "Hình ảnh",
            dataIndex: "hinhAnh",
            width: "7%",
            align: "center",
            key: "hinhAnh",

            render: (text) => (
                <img alt="" src={text} width="200" height="250" />
            ),
        },
        {
            title: "ID Youtube",
            dataIndex: "trailer",
            width: "7%",
            align: "center",
            key: "trailer",
        },
        {
            title: "Độ khó",
            dataIndex: "doKho",
            width: "7%",
            align: "center",
            key: "doKho",
        },
        {
            title: "Số người tối đa",
            dataIndex: "soNguoiToiDa",
            width: "7%",
            align: "center",
            key: "soNguoiToiDa",
        },
        {
            title: "Giá",
            dataIndex: "gia",
            width: "7%",
            align: "center",
            key: "gia",
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            width: "7%",
            render: (text, record) => (
                <Space size="middle">
                    <Link
                        to={`/dashboard/phong/edit/${record._id}`}
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
        setData(data.filter((item) => item._id !== id));

        roomsApi.deleteRoom(id).then((res) => {
            toast.success(res.message);
        });
    };

    useEffect(() => {
        roomsApi.getAllRooms().then((res) => setData(res.phong));
    }, []);
    return (
        <>
            {data ? (
                <>
                    <h2>Quản lí phòng</h2>
                    <Table
                        columns={columns}
                        align="center"
                        dataSource={data}
                        rowKey={(record) => record._id}
                        bordered={true}
                    />
                </>
            ) : (
                <div>Loading....</div>
            )}
        </>
    );
};

export default TableRoom;
