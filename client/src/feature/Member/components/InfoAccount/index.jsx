import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input } from "antd";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";

import { customerApi } from "../../../../api/customerApi";
const InfoAccount = ({ account }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = async (values) => {
        const { matKhau, matKhauMoi } = values;
        const res = await customerApi.updatePasswordCustomer({
            condition: { matKhau },
            matKhauMoi,
        });
        if (res.success) {
            setIsModalVisible(false);
            toast.success(res.message);
        }
    };
    return (
        <>
            <Avatar size={160} icon={<UserOutlined />} />
            <div className="account__info p-5">
                <p>Tên KH : {account.tenKhachHang}</p>
                <p>Email : {account.email}</p>
                <p>SĐT : {account.soDienThoai}</p>
                <p>
                    Tổng chi tiêu :{" "}
                    <NumberFormat
                        value={account.tongChiTieu}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" VND"}
                    />
                </p>
                <p>
                    Điểm tích lũy:{" "}
                    <NumberFormat
                        value={account.diemTichLuy}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" pt"}
                    />
                </p>
                <p>Thành viên: {account.loaiKhachHang.tenLoai}</p>
                <Button type="primary" onClick={showModal}>
                    Đổi mật khẩu
                </Button>
                <Modal
                    title="Đổi mật khẩu"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    okButtonProps={{ hidden: true }}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}>
                        <Form.Item
                            label="Mật khẩu cũ"
                            name="matKhau"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your old password!",
                                },
                            ]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Mật khẩu mới"
                            name="matKhauMoi"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your new password!",
                                },
                            ]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </>
    );
};

export default InfoAccount;
