import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Banner = () => {
    return (
        <OwlCarousel
            loop
            margin={10}
            nav
            dots={false}
            items={1}
            autoplay={true}
            style={{ marginTop: "100px" }}>
            <img
                className="d-block w-100  active"
                src={
                    process.env.PUBLIC_URL +
                    "/assets/img/slider/slider-intro.jpg"
                }
                alt="First slide"
            />

            <img
                className="d-block w-100"
                src={
                    process.env.PUBLIC_URL +
                    "/assets/img/slider/slide-price.jpg"
                }
                alt="Second slide"
            />

            <img
                className="d-block w-100"
                src={
                    process.env.PUBLIC_URL +
                    "/assets/img/slider/slider-price-savemode.jpg"
                }
                alt="Third slide"
            />

            <img
                className="d-block w-100"
                src={
                    process.env.PUBLIC_URL +
                    "/assets/img/slider/slide-commingsoon.jpg"
                }
                alt="Four slide"
            />
        </OwlCarousel>
    );
};

export default Banner;
