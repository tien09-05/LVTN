import React from "react";

const YourVoucher = ({ account }) => {
    return (
        <div className="account__history-gift">
            <h3 style={{ color: "orange" }}>Danh sách voucher hiện có :</h3>
            <table className="table text-white">
                <thead>
                    <tr>
                        <th scope="col">Tên voucher</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    {account.voucher.map((voucher) => (
                        <tr key={voucher._id}>
                            <td>{voucher.tenVoucher}</td>
                            <td>{voucher.moTa}</td>
                            <td>{voucher.giaTri}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default YourVoucher;
