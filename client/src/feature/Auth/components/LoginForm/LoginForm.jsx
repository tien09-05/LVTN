import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authApi } from "../../../../api/authApi";
import { toast } from "react-toastify";
import { login } from "../../authSlice";
import { Modal, Button, Form, Input } from "antd";
import { customerApi } from "../../../../api/customerApi";
const LoginForm = ({ isNhanVien }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            if (isNhanVien) {
                const res = await authApi.loginNhanVien(data);
                console.log(res);
                if (res.success) {
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            token: res.token,
                            user: res.nhanVien,
                        })
                    );
                    toast.success(res.message);
                    dispatch(login(res.nhanVien));
                    history.push("/dashboard");
                }
            } else {
                const res = await authApi.loginKhachHang(data);
                if (res.success) {
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            token: res.token,
                            user: res.khachHang,
                        })
                    );
                    toast.success(res.message);
                    dispatch(login(res.khachHang));
                    history.push("/");
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = async (values) => {
        const { email, soDienThoai, matKhauMoi } = values;

        const res = await customerApi.updatePasswordCustomer({
            condition: {
                email,
                soDienThoai,
            },
            matKhauMoi,
        });
        if (res.success) {
            setIsModalVisible(false);
            toast.success(res.message);
        }
    };
    return (
        <div
            className="form-dangky__container container text-white py-3"
            style={{ maxWidth: "500px" }}>
            <h2 className="text-center text-white">
                {isNhanVien ? "????NG NH???P NH??N VI??N" : "????NG NH???P"}
            </h2>
            <form
                style={{ backgroundColor: "#000" }}
                className="p-5"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <div className="form-group ">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("email", {
                                required: true,
                            })}
                        />
                        {errors.email && (
                            <p className="text-danger">Ch??a nh????p email</p>
                        )}
                    </div>
                    <div className="form-group ">
                        <label>M???t kh???u</label>
                        <input
                            type="password"
                            className="form-control"
                            {...register("matKhau", {
                                required: true,
                            })}
                        />
                        {errors.matKhau && (
                            <p className="text-danger">Ch??a nh????p matKhau</p>
                        )}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn__main text-center mx-auto mt-3 ">
                            ????ng Nh????p
                        </button>
                    </div>
                    {isNhanVien ? (
                        ""
                    ) : (
                        <div className="term mt-5 text-center">
                            <Button type="primary" onClick={showModal}>
                                Qu??n m????t kh????u ?
                            </Button>
                            <Modal
                                title="Qu??n m????t kh????u"
                                visible={isModalVisible}
                                onCancel={handleCancel}
                                okButtonProps={{ hidden: true }}>
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    onFinish={onFinish}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your Email!",
                                            },
                                        ]}>
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="S???? ??i????n thoa??i"
                                        name="soDienThoai"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your S???? ??i????n thoa??i!",
                                            },
                                        ]}>
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="M????t kh????u m????i"
                                        name="matKhauMoi"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your new password!",
                                            },
                                        ]}>
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button
                                            type="primary"
                                            htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
