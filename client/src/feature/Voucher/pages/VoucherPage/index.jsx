import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const styleCard = {
    width: "100%",
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
};
const VoucherPage = ({ vouchers }) => {
    return (
        <>
            <div className="voucher">
                <h1>Voucher</h1>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {vouchers
                        ? vouchers.map((voucher) => (
                              <Col
                                  span={6}
                                  className="gutter-row"
                                  key={voucher._id}>
                                  <Card
                                      style={styleCard}
                                      cover={
                                          <Link to={`/voucher/${voucher._id}`}>
                                              <img
                                                  alt="example"
                                                  src={voucher.hinhAnh}
                                                  width="100%"
                                              />
                                          </Link>
                                      }>
                                      <Link
                                          to={`/voucher/${voucher._id}`}
                                          style={{ textDecoration: "none" }}>
                                          <p className="voucher__name ">
                                              {voucher.tenVoucher}
                                          </p>
                                      </Link>
                                      <p
                                          style={{
                                              color: "orange",
                                              fontWeight: "bold",
                                          }}>
                                          <NumberFormat
                                              value={voucher.giaTri}
                                              displayType={"text"}
                                              thousandSeparator={true}
                                              suffix={" VNĐ"}
                                          />
                                      </p>
                                      <p>
                                          <NumberFormat
                                              value={voucher.giaBan}
                                              displayType={"text"}
                                              thousandSeparator={true}
                                              prefix={"WE points: "}
                                              suffix={" pt"}
                                          />
                                      </p>
                                  </Card>
                              </Col>
                          ))
                        : "Loading...."}
                </Row>
            </div>
        </>
    );
};

export default VoucherPage;
