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
                toast.success(res.message);
                form.setFieldsValue(defaultValuesForm);
            });
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
            <h2> {id ? "S????a nh??n vi??n" : "Th??m nh??n vi??n"}</h2>
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
                    label="T??n nh??n vi??n"
                    name="tenNhanVien"
                    rules={[
                        {
                            required: true,
                            message: "Please input your T??n nh??n vi??n!",
                        },
                    ]}>
                    <Input placeholder="Nh????p t??n nh??n vi??n" />
                </Form.Item>

                <Form.Item
                    label="Nga??y sinh"
                    name="ngaySinh"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Nga??y sinh!",
                        },
                    ]}>
                    <DatePicker className="form-control datapicker" />
                </Form.Item>
                <Form.Item
                    label="Gi????i ti??nh"
                    name="gioiTinh"
                    rules={[
                        {
                            required: true,
                            message: "Please input your chi nha??nh!",
                        },
                    ]}>
                    <Select
                        placeholder="Cho??n gi????i ti??nh"
                        style={{ width: "100%" }}>
                        <Option value="Nam">Nam</Option>
                        <Option value="N????">N????</Option>
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
                    <Input placeholder="Nh????p email" />
                </Form.Item>
                <Form.Item
                    label="M????t kh????u"
                    name="matKhau"
                    rules={[
                        {
                            required: true,
                            message: "Please input your M????t kh????u!",
                        },
                    ]}>
                    <Input placeholder="Nh????p m????t kh????u" />
                </Form.Item>
                <Form.Item
                    label="S???? ??i????n thoa??i"
                    name="soDienThoai"
                    rules={[
                        {
                            required: true,
                            message: "Please input your S???? ??i????n thoa??i!",
                        },
                    ]}>
                    <Input placeholder="Nh????p S???? ??i????n thoa??i" />
                </Form.Item>
                <Form.Item
                    label="Chi nha??nh"
                    name="chinhanh"
                    rules={[
                        {
                            required: true,
                            message: "Please input your chi nha??nh!",
                        },
                    ]}>
                    <Select
                        style={{ width: "100%" }}
                        placeholder="Cho??n Chi nha??nh">
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
