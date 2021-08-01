import React from "react";

const CheckOutInFo = ({ room, chinhanh, date, time }) => {
    return (
        <>
            <h1 style={{ color: "orange" }} className="mt-4">
                {room.tenPhong}
            </h1>
            <div className="col-10">
                <div className=" d-flex justify-content-between mt-3 w-75">
                    <span className="label">Tên chi nhánh :</span>
                    <div className="value w-50">
                        <span href="/games?places=4">
                            {chinhanh.tenChiNhanh}
                        </span>
                    </div>
                </div>
                <div className=" d-flex justify-content-between mt-3 w-75">
                    <span className="label">Địa chỉ :</span>
                    <div className="value w-50">
                        <span href="/games?places=4">{chinhanh.diaChi}</span>
                    </div>
                </div>
                <div className=" d-flex justify-content-between mt-3 w-75">
                    <span className="label">Ngày :</span>
                    <div className="value w-50">
                        <span href="/games?places=4">{date}</span>
                    </div>
                </div>
                <div className=" d-flex justify-content-between mt-3 w-75">
                    <span className="label">Giờ :</span>
                    <div className="value w-50">
                        <span href="/games?places=4"> {time}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOutInFo;
