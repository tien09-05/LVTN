import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ModalVideo from "react-modal-video";
const ContentRoomItem = ({ room, idActive, index }) => {
    let active = index === 0 ? "active" : "";
    if (idActive) {
        active = idActive === room._id ? "active" : "";
    }
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div
                className={`tab-pane text-white fix-img-pane pt-5 ${active}`}
                id={1}
                style={{
                    backgroundImage: `linear-gradient(to right, #000000 18%, rgba(0, 0, 0, 0.4) 73%, rgba(0, 0, 0, 0.3) 100%),
         url(assets/img/background-pane/pharaon.jpg)`,
                }}>
                <div className="container">
                    <div className="type">{room.theLoai}</div>
                    <div className="d-flex align-items-center mt-3">
                        <span className="age badge badge-warning p-2  ">
                            {room.doTuoi}+
                        </span>
                        <h2 className="d-inline" style={{ color: "orange" }}>
                            {room.tenPhong}
                        </h2>
                    </div>
                    <div className="description mt-3">{room.noiDung}</div>
                    <div className="btn__group mt-5">
                        <Link
                            className="btn btn__main btn__book"
                            to={`/rooms/${room._id}`}>
                            ĐẶT CHỖ
                        </Link>

                        <ModalVideo
                            channel="youtube"
                            autoplay
                            isOpen={isOpen}
                            videoId={room.trailer}
                            onClose={() => setOpen(false)}
                        />
                        <button
                            className="btn btn__main ml-4 hide-on-mobile btn__trailer"
                            onClick={() => setOpen(true)}>
                            <i className="fas fa-play-circle mr-1" />
                            TRAILER
                        </button>

                        <br />
                        <span className="mt-2 d-block text-blur small">
                            Đến chơi trả tiền, huỷ lịch không sao!
                        </span>
                    </div>
                    <div className="mt-2">
                        <i className="fas fa-user-friends mr-2 text-warning" />
                        <span style={{ marginLeft: "12px" }}>
                            {" "}
                            {room.soNguoiToiDa} người
                        </span>
                    </div>
                    <div className="mt-2">
                        <i className="fas fa-map-marker-alt mr-2 text-warning" />
                        <span
                            className="text-warning"
                            style={{ marginLeft: "24px" }}>
                            {/* {room.chinhanh[0].tenChiNhanh} */}
                            {room.chinhanh.map(
                                (item) => item.tenChiNhanh + ", "
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentRoomItem;
