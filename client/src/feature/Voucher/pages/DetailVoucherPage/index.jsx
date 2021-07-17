import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./style.css";
import { Carousel } from "antd";
import { Card } from "antd";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { customerApi } from "../../../../api/customerApi";
import { toast } from "react-toastify";
import { addVoucherAction } from "../../../Auth/authSlice";
import { Modal } from "antd";
const DetailVoucherPage = ({ vouchers }) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { auth } = useSelector((state) => state);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // setting carousel
    const setting = {
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
    };
    // modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // function
    const voucher = vouchers.find((item) => item._id === id);

    const addVoucher = async (id, idVoucher, giaBan) => {
        if (auth.diemTichLuy < giaBan) {
            setIsModalVisible(true);
            return;
        }
        const res = await customerApi.addVoucher(id, idVoucher, giaBan);

        if (res.success) {
            dispatch(addVoucherAction({ voucher }));

            toast.success(res.message);
            window.location.replace("/voucher");
        }
    };
    return (
        <div className="detail-voucher">
            {voucher ? (
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <div>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/storage-image-d6e7d.appspot.com/o/voucher500.jpg?alt=media&token=71f02690-d9bd-4d45-95e3-1ee41b78db13"
                                alt=""
                                width="90%"
                            />
                        </div>
                    </Col>
                    <Col className="gutter-row " span={12}>
                        <div>
                            <div className="mt-5">VOUCHER</div>
                            <h3 className="detail-voucher__name mt-4 text-white">
                                {voucher.tenVoucher}
                            </h3>
                            <div className="detail-voucher__desc mt-4">
                                {voucher.moTa}
                            </div>
                            <h3 className="detail-voucher__value mt-4">
                                {voucher.giaTri} VNĐ
                            </h3>
                            <div className="detail-voucher__point mt-4">
                                WE points: {voucher.giaBan} pt
                            </div>

                            <button
                                className="nav-link btn btn__main mt-4"
                                onClick={() =>
                                    addVoucher(
                                        auth._id,
                                        voucher._id,
                                        voucher.giaBan
                                    )
                                }>
                                Đổi Voucher
                            </button>
                            <Modal
                                title="Basic Modal"
                                visible={isModalVisible}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                cancelButtonProps={{ hidden: true }}>
                                <p>Bạn không đủ điểm tích lũy</p>
                            </Modal>
                        </div>
                    </Col>
                </Row>
            ) : (
                "Loading..."
            )}
            <div className="related-voucher mt-5 ">
                <h3 className="text-white">Có thể bạn sẽ thích</h3>
                {vouchers ? (
                    <Carousel {...setting}>
                        {vouchers.map((voucher) => (
                            <Card
                                key={voucher._id}
                                bordered={false}
                                cover={
                                    <Link to={`/voucher/${voucher._id}`}>
                                        <img
                                            alt="example"
                                            src={voucher.hinhAnh}
                                            width="95%"
                                        />
                                    </Link>
                                }>
                                <Link
                                    to={`/voucher/${voucher._id}`}
                                    style={{ textDecoration: "none" }}>
                                    <p className="voucher__name">
                                        {voucher.tenVoucher}
                                    </p>
                                </Link>
                                <p className="text-white">
                                    {voucher.giaTri} VND
                                </p>
                                <p className="text-white">
                                    WE points: {voucher.giaBan} pt
                                </p>
                            </Card>
                        ))}
                    </Carousel>
                ) : (
                    "Loading...."
                )}
            </div>
        </div>
    );
};

export default DetailVoucherPage;
