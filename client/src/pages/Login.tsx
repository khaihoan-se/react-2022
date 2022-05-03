import React from "react";
import Image from "../components/shared/Image";
import BgUrl from "../asset/login-background.png";


const Login = () => {
    return (
        <div className="w-full h-screen flex items-center">
            <div className="relative w-[570px] h-full">
                <Image className="max-w-full min-w-full min-h-full object-cover absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" src={BgUrl} alt="bg login" />
                <div className="absolute inset-0 flex flex-col justify-center px-4 banner__overlay--down md:px-12"></div>
            </div>
            <div className="col-span-3 bg-background flex items-center justify-center">
            </div>
        </div>
    )
}

export default Login;