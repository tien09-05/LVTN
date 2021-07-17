import React, { useEffect, useMemo } from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { typeCustomerApi } from "../../../../../api/typeCustomerApi";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

const AddEditTypeCustomer = () => {
    let { id } = useParams();
    const history = useHistory();

    const [form] = Form.useForm();

    const defaultValuesForm = useMemo(
        () => ({
            tenLoai: "",
            dieuKien: 0,
            giamGia: 0,
            tichDiem: 0,
        }),
        []
    );
    const onFinish = (values) => {
        const { giamGia, tichDiem } = values;
        values.quyenLoi = {
            giamGia,
            tichDiem,
        };
        console.log(values);
        if (id) {
            typeCustomerApi.updateTypeCustomer(id, values).then((res) => {
                toast.success(res.message);
                history.push("/dashboard/loaikhachhang");
            });
        } else {
            typeCustomerApi.createTypeCustomer(values).then((res) => {
                toast.success(res.message);
                form.setFieldsValue(defaultValuesForm);
            });
        }
    };

    useEffect(() => {
        if (id) {
            typeCustomerApi.getTypeCustomer(id).then((res) => {
                const { tenLoai, dieuKien, quyenLoi } = res.data;
                const { giamGia, tichDiem } = quyenLoi;
                form.setFieldsValue({
                    tenLoai,
                    dieuKien,
                    giamGia,
                    tichDiem,
                });
            });
        } else {
            form.setFieldsValue(defaultValuesForm);
        }
    }, [form, id, defaultValuesForm]);
    return (
        <>
            <h2> {id ? "Sửa loại khách hàng" : "Thêm loại khách hàng"}</h2>
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
                    label="Tên loại khách hàng"
                    name="tenLoai"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Tên loại khách hàng!",
                        },
                    ]}>
                    <Input placeholder="Nhập tên loại khách hàng" />
                </Form.Item>

                <Form.Item
                    label="Điều kiện"
                    name="dieuKien"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Điều kiện!",
                        },
                    ]}>
                    <InputNumber
                        placeholder="Nhập Điều kiện"
                        style={{ width: 400 }}
                    />
                </Form.Item>
                <Form.Item
                    label="Giảm Giá"
                    name="giamGia"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Giảm Giá!",
                        },
                    ]}>
                    <InputNumber
                        placeholder="Nhập Giảm Giá"
                        style={{ width: 400 }}
                    />
                </Form.Item>
                <Form.Item
                    label="Tích điểm"
                    name="tichDiem"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Tích điểm!",
                        },
                    ]}>
                    <InputNumber
                        placeholder="Nhập Tích điểm"
                        style={{ width: 400 }}
                    />
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

export default AddEditTypeCustomer;
