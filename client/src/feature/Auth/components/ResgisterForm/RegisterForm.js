import React from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { authApi } from "../../../../api/authApi";

const RegisterForm = () => {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const res = await authApi.registerKhachHang(data);
        if (res.success) {
            toast.success(res.message);
            history.push("/auth/login");
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ backgroundColor: "#000" }}
                className="p-5">
                <div className="row">
                    <div className="form-group col-md-6 mt-5">
                        <label>Tên đầy đủ</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("tenKhachHang", { required: true })}
                        />
                        {errors.tenKhachHang && (
                            <p className="text-danger">Chưa nhập tên</p>
                        )}
                    </div>
                    <div className="form-group col-md-6 mt-5">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            {...register("email", { required: true })}
                        />
                        {errors.tenKhachHang && (
                            <p className="text-danger">Chưa nhập Email</p>
                        )}
                    </div>
                    <div className="form-group col-md-6 mt-5">
                        <label>Số điện thoại</label>
                        <input
                            type="tel"
                            className="form-control"
                            {...register("soDienThoai", { required: true })}
                        />
                        {errors.matKhau && (
                            <p className="text-danger">
                                Chưa nhập số điện thoại
                            </p>
                        )}
                    </div>

                    <div className="form-group col-md-6 mt-5">
                        <label>Giới tính</label>
                        <select
                            className="form-control"
                            {...register("gioiTinh")}>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6 mt-5">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            {...register("matKhau", { required: true })}
                        />
                        {errors.matKhau && (
                            <p className="text-danger">Chưa nhập mật khẩu</p>
                        )}
                    </div>
                    <div className="form-group col-md-6 mt-5">
                        <label>Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            {...register("confirmMatKhau", {
                                validate: (value) => value === watch("matKhau"),
                            })}
                        />
                        {errors.confirmMatKhau && (
                            <p className="text-danger">
                                "Xác nhận mật khẩu không đúng"
                            </p>
                        )}
                    </div>
                    <div className="term mt-5" style={{ textAlign: "left" }}>
                        Tôi đồng ý với các điều khoản của We Escape như sau:
                        <br />- Cho phép We Escape lưu trữ các thông tin cá nhân
                        bên trên để phục vụ cho hệ thống thẻ thành viên
                        <br />- We Escape có thể liên lạc với bạn qua thông tin
                        cung cấp bên trên
                        <br />- We Escape có quyền thay đổi hoặc huỷ không báo
                        trước các quyền lợi và ưu đãi của chương trình thành
                        viên này
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
                            Tôi đồng ý
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn__main text-center mx-auto mt-5 ">
                        Đăng ký
                    </button>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;
