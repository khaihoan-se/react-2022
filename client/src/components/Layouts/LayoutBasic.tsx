import React from "react";
import Footer from "../partials/Footer";
// import Header from "../partials/Header";
import { LayoutType } from "../../types"
import Navbar from "../partials/Navbar";

const LayoutBasic: React.FC<LayoutType> = ({children}) => {
    return (
        <div className="content-wrapper relative font-Karla max-w-screen-2xl text-base mx-auto px-8">
            <Navbar />
            <main className="main pt-20">{children}</main> {/* Main */}
            <Footer /> {/* Footer */}
        </div>
    )
};

export default LayoutBasic;