import React, { useState } from "react";
import Banner from "../../../../components/Banner/Banner";

import CarouselRooms from "../../components/CarouselRooms/CarouselRooms";
import ContentRoom from "../../components/ContentRoom/ContentRoom";

const HomePage = ({ rooms }) => {
    const [idActive, setIdActive] = useState("");
    return (
        <>
            <Banner />

            <div style={{ backgroundColor: "#161616" }}>
                <CarouselRooms rooms={rooms} setIdActive={setIdActive} />
                <ContentRoom rooms={rooms} idActive={idActive} />
            </div>
        </>
    );
};

export default HomePage;
