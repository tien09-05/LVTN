import React from "react";

const YourCheckout = ({ dondatphong }) => {
    return (
        <div className="account__history-play">
            <h3 style={{ color: "orange" }}>Đơn đặt phòng hiện có :</h3>
            {dondatphong.length > 0 ? (
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">Chi nhánh</th>
                            <th scope="col">Phòng</th>
                            <th scope="col">Ngày chơi</th>
                            <th scope="col">Giờ chơi</th>
                            <th scope="col">Tổng tiền</th>
                            <th scope="col">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dondatphong.map((item) => (
                            <tr key={item._id}>
                                <td>{item.chinhanh.tenChiNhanh}</td>
                                <td>{item.phong.tenPhong}</td>
                                <td>{item.ngayChoi}</td>
                                <td>{item.gioChoi}</td>
                                <td>{item.tongTien}</td>
                                <td>{item.trangThai}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                "chưa có đơn đặt phòng nào !!!"
            )}
        </div>
    );
};

export default YourCheckout;
