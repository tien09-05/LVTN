import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { employeeApi } from "../../../../../api/employeeApi";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
import { branchApi } from "../../../../../api/branchApi";
import moment from "moment";
const { Option } = Select;

const AddEditEmployee = () => {
    let { id } = useParams();
    const history = useHistory();

    const [branches, setBranches] = useState([]);

    const [form] = Form.useForm();

    const defaultValuesForm = useMemo(
        () => ({
            tenNhanVien: "",
            ngaySinh: "",
            gioiTinh: "",
            email: "",
            matKhau: "",
            soDienThoai: "",
            chucvu: "",
            chinhanh: [],
        }),
        []
    );
    const onFinish = (values) => {
        if (id) {
            values.ngaySinh = values.ngaySinh._d.toLocaleDateString();
            employeeApi.updateEmployee(id, values).then((res) => {
                toast.success(res.message);
                history.push("/dashboard/nhanvien");
            });
        } else {
            values.ngaySinh = values.ngaySinh._d.toLocaleDateString();
            employeeApi.createEmployee(values).then((res) => {
                if(res.success){
                    toast.success(res.message);
                form.setFieldsValue(defaultValuesForm);
                }else{
                    toast.error(res.message);

                }
            
            }).catch(error=>console.log(error));
        }
    };

    useEffect(() => {
        branchApi.getAllBranches().then((res) => setBranches(res.data));

        if (id) {
            employeeApi.getEmployee(id).then((res) => {
                const {
                    tenNhanVien,
                    gioiTinh,
                    ngaySinh,

                    email,
                    matKhau,
                    soDienThoai,
                    chucvu,
                    chinhanh,
                } = res.data;
                form.setFieldsValue({
                    tenNhanVien,
                    ngaySinh: moment(ngaySinh, "DD/MM/YYYY"),
                    gioiTinh,
                    email,
                    matKhau,
                    soDienThoai,
                    chucvu,
                    chinhanh,
                });
            });
        } else {
            form.setFieldsValue(defaultValuesForm);
        }
    }, [form, id, defaultValuesForm]);

    return (
        <>
            <h2> {id ? "Sửa nhân viên" : "Thêm nhân viên"}</h2>
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 12,
                }}
                onFinish={onFinish}>
                <Form.Item
                    label="Tên nhân viên"
                    name="tenNhanVien"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Tên nhân viên!",
                        },
                    ]}>
                    <Input placeholder="Nhập tên nhân viên" />
                </Form.Item>

                <Form.Item
                    label="Ngày sinh"
                    name="ngaySinh"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Ngày sinh!",
                        },
                    ]}>
                    <DatePicker className="form-control datapicker" />
                </Form.Item>
                <Form.Item
                    label="Giới tính"
                    name="gioiTinh"
                    rules={[
                        {
                            required: true,
                            message: "Please input your chi nhánh!",
                        },
                    ]}>
                    <Select
                        placeholder="Chọn giới tính"
                        style={{ width: "100%" }}>
                        <Option value="Nam">Nam</Option>
                        <Option value="Nữ">Nữ</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Email!",
                        },
                    ]}>
                    <Input placeholder="Nhập email" />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="matKhau"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Mật khẩu!",
                        },
                    ]}>
                    <Input placeholder="Nhập mật khẩu" />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="soDienThoai"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Số điện thoại!",
                        },
                    ]}>
                    <Input placeholder="Nhập Số điện thoại" />
                </Form.Item>
                <Form.Item
                    label="Chi nhánh"
                    name="chinhanh"
                    rules={[
                        {
                            required: true,
                            message: "Please input your chi nhánh!",
                        },
                    ]}>
                    <Select
                        style={{ width: "100%" }}
                        placeholder="Chọn Chi nhánh">
                        {branches.map((branch) => (
                            <Option key={branch._id} value={branch._id}>
                                {branch.tenChiNhanh}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddEditEmployee;
