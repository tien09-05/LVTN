import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import { Form, Button, Modal } from "antd";
import "./Book.css";
import { useSelector } from "react-redux";
import { Select } from "antd";
import { checkoutApi } from "../../../../api/checkoutApi";
import moment from "moment";

const { Option } = Select;

const Book = ({ room }) => {
    //state
    const [time, setTime] = useState("");
    const [checkouts, setCheckouts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [date, setDate] = useState(moment());
    const [chinhanh, setChiNhanh] = useState(room.chinhanh[0]._id);
    // redux
    const { auth } = useSelector((state) => state);

    const [form] = Form.useForm();

    useEffect(() => {
        checkoutApi.getAllCheckouts().then((res) => setCheckouts(res.data));
        const defaultValues = {
            date,
            chinhanh,
        };
        form.setFieldsValue(defaultValues);
    }, [form, date, chinhanh]);

    // function
    // modal
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // submit
    const onFinish = (values) => {
        if (!auth.hasOwnProperty("tenKhachHang")) {
            setIsModalVisible(true);
            return;
        }

        values.time = time;
        values.chinhanh = room.chinhanh.find(
            (room) => room._id === values.chinhanh
        );
        values.auth = auth;
        values.room = room;

        values.date = values.date.format("L");
        localStorage.setItem("checkout", JSON.stringify(values));
        window.location.replace("/checkout");
    };

    const onChangeDataPicker = (date, dateString) => {
        setDate(date);
    };

    const onChangeSelect = (value) => {
        setChiNhanh(value);
    };
    const newCheckouts = checkouts.filter((checkout) => {
        return (
            checkout.ngayChoi === moment(date).format("L") &&
            checkout.chinhanh._id === chinhanh
        );
    });
    return (
        <>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelButtonProps={{ hidden: "true" }}>
                <p>Nhân viên không thể đặt phòng chơi</p>
            </Modal>
            <div
                className="text-white mb-5 pb-3 container"
                style={{ borderBottom: "1px solid wheat" }}>
                <h3 className="font_bold text-white" id="book">
                    Đặt Chỗ
                </h3>
                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    className="form-checkout">
                    <Form.Item
                        label="Chọn ngày chơi"
                        name="date"
                        rules={[
                            {
                                required: true,
                                message: "Please input your date!",
                            },
                        ]}>
                        <DatePicker
                            className="form-control book__datapicker"
                            placeholder="Chọn ngày chơi"
                            onChange={onChangeDataPicker}
                            style={{
                                width: "25%",
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="chonchinhanh"
                        name="chinhanh"
                        rules={[
                            {
                                required: true,
                                message: "Please input your chinhanh!",
                            },
                        ]}>
                        <Select
                            style={{
                                width: "25%",
                            }}
                            placeholder="Chọn chi nhánh"
                            className="select-chinhanh"
                            onChange={onChangeSelect}>
                            {room.chinhanh.map((chinhanh) => {
                                return (
                                    <Option
                                        value={chinhanh._id}
                                        key={chinhanh._id}>
                                        {chinhanh.tenChiNhanh}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        {room.suatChoi.map((item) => (
                            <Button
                                disabled={
                                    newCheckouts &&
                                    newCheckouts.findIndex(
                                        (checkout) => checkout.gioChoi === item
                                    ) !== -1
                                        ? true
                                        : false
                                }
                                type="primary"
                                htmlType="submit"
                                name="time"
                                className="btn__book-submit"
                                onClick={() => setTime(item)}
                                key={item}>
                                {item}
                            </Button>
                        ))}
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Book;
