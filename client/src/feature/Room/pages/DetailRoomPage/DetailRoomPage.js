import React, { useEffect } from "react";
//component
import Banner from "../../../../components/Banner/Banner";
import PriceTable from "../../components/PriceTable/PriceTable";
import Book from "../../components/Book/Book";
import DifferentProduct from "../../components/DifferentProduct/DifferentProduct";
//
import { useParams } from "react-router-dom";
import DetailRoom from "../../components/DetailRoom/DetailRoom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomsAsync } from "../../roomsSlice";
const DetailRoomPage = () => {
    const { id } = useParams();
    const rooms = useSelector((state) => state.rooms);

    const room = rooms.find((room) => room._id === id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRoomsAsync());
        window.scrollTo(0, 0);
    }, [dispatch]);
    useEffect(() => {
        window.scrollTo(0, 850);
    });
    return (
        <>
            <Banner />
            {room ? (
                <div className="container">
                    <div
                        className="row pt-5  mb-5 "
                        style={{ marginTop: "50px" }}>
                        <DetailRoom room={room} />

                        <PriceTable />

                        <Book room={room} />

                        <DifferentProduct rooms={rooms} />
                    </div>
                </div>
            ) : (
                "Loading...."
            )}
        </>
    );
};

export default DetailRoomPage;
