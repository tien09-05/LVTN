import React, { useState } from "react";
import { useEffect } from "react";
import { typeCustomerApi } from "../../api/typeCustomerApi";
import NumberFormat from "react-number-format";

const TypeCustomer = () => {
    const [data, setData] = useState([]);
    useEffect(
        () =>
            typeCustomerApi
                .getAllTypeCustomer()
                .then((res) => setData(res.data)),
        []
    );
    return (
        <>
            {data ? (
                <div className="container pb-5" style={{ marginTop: "130px" }}>
                    <h2 style={{ color: "orange" }}>Quyền lợi thành viên</h2>
                    <table
                        className="table table-bordered text-white mt-5 "
                        style={{ maxWidth: "500px" }}>
                        <thead>
                            <tr>
                                <th scope="col">Loại</th>
                                <th scope="col">Điều kiện</th>
                                <th scope="col">Giảm giá</th>
                                <th scope="col">Tích điểm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.tenLoai}</td>
                                    <td>
                                        <NumberFormat
                                            value={item.dieuKien}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"Tổng chi tiêu > "}
                                            suffix={" VNĐ"}
                                        />
                                    </td>
                                    <td>{item.quyenLoi.giamGia * 100}%</td>
                                    <td>
                                        x{item.quyenLoi.tichDiem} <br />
                                        <span className="text-muted">
                                            (10k = 1pt)
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                "loading..."
            )}
        </>
    );
};

export default TypeCustomer;
