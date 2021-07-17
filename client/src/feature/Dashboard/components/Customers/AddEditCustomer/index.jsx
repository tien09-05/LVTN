import React, { useEffect, useMemo } from "react";
import { Form, Input, Button, Upload } from "antd";
import { customerApi } from "../../../../../api/customerApi";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
import { app } from "../../../../../base";
import { UploadOutlined } from "@ant-design/icons";

const AddEditCustomer = () => {
    let { id } = useParams();
    const history = useHistory();
    const [form] = Form.useForm();

    const defaultValuesForm = useMemo(
        () => ({
            tenCustomer: "",
            giaTri: 0,
            giaBan: 0,
            hinhAnh: "",
            moTa: "",
        }),
        []
    );
    const onFinish = async (values) => {
        if (id) {
            customerApi.updateCustomer(id, values).then((res) => {
                toast.success(res.message);
                history.push("/dashboard/khachhang");
            });
        } else {
            // handle image
            const urlImage = await handleImage(values.hinhanh);
            values.hinhAnh = urlImage;
            customerApi.createCustomer(values).then((res) => {
                toast.success(res.message);
                form.setFieldsValue(defaultValuesForm);
            });
        }
    };

    useEffect(() => {
        if (id) {
            customerApi.getCustomer(id).then((res) => {
                const { tenCustomer, giaTri, giaBan, hinhAnh, moTa } = res.data;
                form.setFieldsValue({
                    tenCustomer,
                    giaTri,
                    giaBan,
                    hinhAnh,
                    moTa,
                });
            });
        } else {
            form.setFieldsValue(defaultValuesForm);
        }
    }, [form, id, defaultValuesForm]);

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const handleImage = async (data) => {
        const file = data[0].originFileObj;
        console.log(file.size);
        const storageRef = app.storage().ref();

        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const img = await fileRef.getDownloadURL();
        return img;
    };
    return (
        <>
            <h2> {id ? "Sửa Customer" : "Thêm Customer"}</h2>
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
                    label="Tên customer"
                    name="tenCustomer"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Tên customer!",
                        },
                    ]}>
                    <Input placeholder="Nhập tên Tên customer" />
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="moTa"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Mô tả!",
                        },
                    ]}>
                    <Input.TextArea placeholder="Nhập Mô tả" />
                </Form.Item>

                <Form.Item
                    label="Giá trị"
                    name="giaTri"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Giá trị!",
                        },
                    ]}>
                    <Input placeholder="Nhập Giá trị" />
                </Form.Item>
                <Form.Item
                    label="Giá bán"
                    name="giaBan"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Giá bán!",
                        },
                    ]}>
                    <Input placeholder="Nhập Giá bán" />
                </Form.Item>
                <Form.Item
                    name="hinhanh"
                    label="Hình ảnh"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}>
                    <Upload name="logo" listType="picture" maxCount={1}>
                        <Button icon={<UploadOutlined />}>
                            Click to upload
                        </Button>
                    </Upload>
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

export default AddEditCustomer;
