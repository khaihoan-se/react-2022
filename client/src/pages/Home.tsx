import React, { useRef, useState } from "react";

import Data from "../data.json"
import Sliderss from "../components/features/home/Sliderss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const [ data, setData ] = useState(Data.products);

    console.log(data)
    const settings = {
        dots: false,
        autoplay: true,
        infinite: false,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className="group w-full h-[550px] overflow-hidden">
                <Slider {...settings} className="w-full h-full">
                    <Sliderss />
                    <Sliderss />
                    <Sliderss />
                    <Sliderss />
                </Slider>
            </div>
        </div>
    )
}

export default Home;