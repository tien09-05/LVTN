import React, { useEffect, useMemo } from "react";
import { Form, Input, Button } from "antd";
import { branchApi } from "../../../../../api/branchApi";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

const AddEditBranch = () => {
    let { id } = useParams();
    const history = useHistory();

    const [form] = Form.useForm();

    const defaultValuesForm = useMemo(
        () => ({
            tenChiNhanh: "",
            diaChi: "",
            soDienThoai: "",
        }),
        []
    );
    const onFinish = (values) => {
        if (id) {
            branchApi.updateBranch(id, values).then((res) => {
                toast.success(res.message);
                history.push("/dashboard/chinhanh");
            });
        } else {
            branchApi.createBranch(values).then((res) => {
                toast.success(res.message);
                form.setFieldsValue(defaultValuesForm);
            });
        }
    };

    useEffect(() => {
        if (id) {
            branchApi.getBranch(id).then((res) => {
                const { tenChiNhanh, diaChi, soDienThoai } = res.data;
                form.setFieldsValue({
                    tenChiNhanh,
                    diaChi,
                    soDienThoai,
                });
            });
        } else {
            form.setFieldsValue(defaultValuesForm);
        }
    }, [form, id, defaultValuesForm]);
    return (
        <>
            <h2> {id ? "Sửa chi nhánh" : "Thêm chi nhánh"}</h2>
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
                    label="Tên chi nhánh"
                    name="tenChiNhanh"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Tên chi nhánh!",
                        },
                    ]}>
                    <Input placeholder="Nhập tên chi nhánh" />
                </Form.Item>

                <Form.Item
                    label="Địa chỉ"
                    name="diaChi"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Địa chỉ!",
                        },
                    ]}>
                    <Input placeholder="Nhập địa chỉ" />
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
                    <Input placeholder="Nhập số điện thoại" />
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

export default AddEditBranch;
