import React, { useEffect } from "react";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "./CarouselRooms.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomsAsync } from "../../roomsSlice";
import CarouselItem from "../CarouselItem/CarouselItem";
import { Carousel } from "antd";
const CarouselRooms = ({ setIdActive }) => {
    const dispatch = useDispatch();

    const rooms = useSelector((state) => state.rooms);
    useEffect(() => {
        dispatch(getAllRoomsAsync());
    }, [dispatch]);

    // setting carousel
    const setting = {
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1248,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 868,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="container carousel">
            <div className="challenges__header d-flex justify-content-between align-items-center py-4 text-white">
                <h2 className="challenges__title" style={{ color: "orange" }}>
                    WE ESCAPE CHALLENGES
                </h2>
            </div>
            <Carousel
                className="owl-theme "
                {...setting}
                style={{ margin: "0 -12px" }}>
                {rooms.map((room) => (
                    <CarouselItem
                        room={room}
                        key={room._id}
                        setIdActive={setIdActive}></CarouselItem>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselRooms;
