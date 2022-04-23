import Image from "../../shared/Image";
import React, { useRef, useState } from "react";

interface SliderProps {
    banner: string;
    title: string;
    description: string;
    category: string;
    price: number;
    image: string
}

const Sliders = (props: SliderProps) => {

    console.log(props)
    return (
        <div className="group relative w-full h-[550px] overflow-hidden">
        {/* Img */}
            <Image className="max-w-full min-w-full min-h-full object-cover absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" src={props.banner} alt="slider...." />

            <div className="absolute inset-0 flex flex-col justify-center px-4 banner__overlay md:px-12"></div>

            <div className="absolute left-12 top-1/2 -translate-y-1/2 w-full md:w-[45%]">
                <h1 className="text-2xl font-bold uppercase md:text-4xl line-clamp-2 sm:line-clamp-3 md:line-clamp-4">{props.title}</h1>
                <div className="flex flex-wrap items-center mt-4 text-lg gap-x-8">
                    <div className="flex items-center space-x-1">
                        <svg fill="currentColor" viewBox="0 0 1024 1024" className="w-6 h-6 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
                        </svg>
                        <p>{props.price}</p>
                    </div>
                    <div className="flex line-clamp-1 items-center space-x-2">
                        <span>{props.category}</span>
                        {/* <span className="w-1.5 h-1.5 bg-background-200 rounded-full inline-block"></span>
                        <span>Romance</span>
                        <span className="w-1.5 h-1.5 bg-background-200 rounded-full inline-block"></span>
                        <span>Slice of Life</span> */}
                    </div>
                </div>
                <p className="hidden mt-2 text-base md:block text-gray-200 md:line-clamp-5">{props.description}</p>
            </div>
        </div>
    )
}

export default Sliders;