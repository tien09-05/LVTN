import React from "react";
import "./ContentRoom.css";
import ContentRoomItem from "../ContentRoomItem/ContentRoomItem";
const ContentRoom = ({ rooms, idActive }) => {
    return (
        <div className="tab-content well ">
            {rooms.map((room, index) => (
                <ContentRoomItem
                    room={room}
                    idActive={idActive}
                    key={room._id}
                    index={index}
                />
            ))}
        </div>
    );
};

export default ContentRoom;
