import React from "react";
import { Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";

const CarouselItem = ({ room, setIdActive }) => {
    const renderDoKho = (doKho) => {
        const result = [];
        for (let index = 0; index < doKho; index++) {
            result.push(<StarFilled style={{ color: "orange" }} key={index} />);
        }
        return result;
    };
    return (
        <Link
            to={`/rooms/${room._id}`}
            className="item d-block "
            style={{ height: "450px", margin: "0 12px" }}
            onMouseEnter={(e) => setIdActive(e.target.id)}>
            <img
                src={room.hinhAnh}
                alt=""
                style={{ height: "100%", width: "100%" }}
                id={room._id}
            />
            <div className="overlay"> </div>
            <div className="item__content">
                <div className="item__text ">{room.tenPhong}</div>
                <div className="item__rating mt-1">
                    {renderDoKho(room.doKho)}
                </div>
            </div>
        </Link>
    );
};

export default CarouselItem;
