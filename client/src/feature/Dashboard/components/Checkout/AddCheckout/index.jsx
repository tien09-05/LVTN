import React from "react";
import { Form, Input, Button } from "antd";
import { checkoutApi } from "../../../../../api/checkoutApi";
import { toast } from "react-toastify";

const AddCheckout = () => {
    const [form] = Form.useForm();
    const defaultValuesForm = {
        soNguoiChoi: 0,
        ngayChoi: "",
        gioChoi: "",
        tienTamTinh: 0,
        tongTien: 0,
        khachhang: "",
        phong: "",
        chinhanh: "",
    };
    const onFinish = (values) => {
        checkoutApi.createCheckout(values).then((res) => {
            toast.success(res.message);
            form.setFieldsValue(defaultValuesForm);
        });
    };

    return (
        <>
            <h2> Thêm đơn đặt hàng</h2>
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
                    label=" Số người chơi"
                    name="soNguoiChoi"
                    rules={[
                        {
                            required: true,
                            message: "Please input your  Số người chơi!",
                        },
                    ]}>
                    <Input placeholder="Nhập  Số người chơi" />
                </Form.Item>

                <Form.Item
                    label="ngày chơi"
                    name="ngayChoi"
                    rules={[
                        {
                            required: true,
                            message: "Please input your ngày chơi!",
                        },
                    ]}>
                    <Input placeholder="Nhập ngày chơi" />
                </Form.Item>
                <Form.Item
                    label="giờ chơi"
                    name="gioChoi"
                    rules={[
                        {
                            required: true,
                            message: "Please input your giờ chơi!",
                        },
                    ]}>
                    <Input placeholder="Nhập giờ chơi" />
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

export default AddCheckout;
