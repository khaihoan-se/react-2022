import React, { useRef, useState } from "react";

import Data from "../data.json"
import Sliders from "../components/features/home/Sliders";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ToolsHome from "../components/features/home/ToolsHome";

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
            <div className="group relative w-full h-[450px] overflow-hidden">
                <Slider {...settings} className="w-full h-full">
                    {
                        data.map(item => <Sliders 
                                key={item._id}
                                banner={item.banner} 
                                description={item.description} 
                                price={item.price} 
                                image={item.image}
                                title={item.title}
                                category={item.category}
                            />
                        )
                    }
                </Slider>
            </div>
            <ToolsHome />
        </div>
    )
}

export default Home;