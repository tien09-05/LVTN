import React, { useEffect, useMemo, useState } from "react";
import { Form, Input, Button, Upload, Select } from "antd";
import { roomsApi } from "../../../../../api/roomsApi";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { app } from "../../../../../base";
import { branchApi } from "../../../../../api/branchApi";

const { Option } = Select;
const AddEditRoom = () => {
    let { id } = useParams();
    const history = useHistory();

    const [form] = Form.useForm();
    const [branches, setBranches] = useState([]);

    const defaultValuesForm = useMemo(
        () => ({
            tenPhong: "",
            theLoai: "",
            noiDung: "",
            hinhAnh: "",
            trailer: "",
            doKho: 0,
            soNguoiToiDa: 0,
            gia: 0,
            chinhanh: [],
        }),
        []
    );
    const onFinish = async (values) => {
        if (id) {
            const res = await roomsApi.updateRoom(id, values);
            toast.success(res.message);

            history.push("/dashboard/phong");
        } else {
            // handle image
            const urlImage = await handleImage(values.hinhanh);
            values.hinhAnh = urlImage;

            // call api create room
            const res = await roomsApi.createRoom(values);
            toast.success(res.message);
            form.setFieldsValue(defaultValuesForm);
        }
    };

    useEffect(() => {
        branchApi.getAllBranches().then((res) => setBranches(res.data));

        if (id) {
            roomsApi.getRoom(id).then((res) => {
                console.log(res);
                const chinhanhs = [];
                res.phong.chinhanh.map((chinhanh) =>
                    chinhanhs.push(chinhanh._id)
                );
                form.setFieldsValue({
                    tenPhong: res.phong.tenPhong,
                    theLoai: res.phong.theLoai,
                    noiDung: res.phong.noiDung,
                    hinhAnh: res.phong.hinhAnh,
                    doKho: res.phong.doKho,
                    soNguoiToiDa: res.phong.soNguoiToiDa,
                    gia: res.phong.gia,
                    chinhanh: chinhanhs,
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
            <h2> {id ? "S????a pho??ng" : "Th??m pho??ng"}</h2>
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
                    label="T??n pho??ng"
                    name="tenPhong"
                    rules={[
                        {
                            required: true,
                            message: "Please input your T??n pho??ng!",
                        },
                    ]}>
                    <Input placeholder="Nh????p t??n pho??ng" />
                </Form.Item>

                <Form.Item
                    label="Th???? loa??i"
                    name="theLoai"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Th???? loa??i!",
                        },
                    ]}>
                    <Input placeholder="Nh????p Th???? loa??i" />
                </Form.Item>

                <Form.Item
                    label="N????i dung"
                    name="noiDung"
                    rules={[
                        {
                            required: true,
                            message: "Please input your N????i dung!",
                        },
                    ]}>
                    <Input.TextArea placeholder="Nh????p N????i dung" />
                </Form.Item>

                <Form.Item
                    name="hinhanh"
                    label="Hi??nh a??nh"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}>
                    <Upload name="logo" listType="picture" maxCount={1}>
                        <Button icon={<UploadOutlined />}>
                            Click to upload
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Trailer"
                    name="trailer"
                    rules={[
                        {
                            required: true,
                            message: "Please input your trailer!",
                        },
                    ]}>
                    <Input placeholder="Nh????p trailer" />
                </Form.Item>

                <Form.Item
                    label="?????? kho??"
                    name="doKho"
                    rules={[
                        {
                            required: true,
                            message: "Please input your ?????? kho??!",
                        },
                    ]}>
                    <Input placeholder="Nh????p ?????? kho??" />
                </Form.Item>
                <Form.Item
                    label="S???? ng??????i t????i ??a"
                    name="soNguoiToiDa"
                    rules={[
                        {
                            required: true,
                            message: "Please input your S???? ng??????i t????i ??a!",
                        },
                    ]}>
                    <Input placeholder="Nh????p S???? ng??????i t????i ??a" />
                </Form.Item>
                <Form.Item
                    label="Gia??"
                    name="gia"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Gia??!",
                        },
                    ]}>
                    <Input placeholder="Nh????p Gia??" />
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
                    <Select mode="tags" style={{ width: "100%" }}>
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

export default AddEditRoom;
