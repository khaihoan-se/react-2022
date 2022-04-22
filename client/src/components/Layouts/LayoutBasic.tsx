import React from "react";
import Footer from "../partials/Footer";
import { LayoutType } from "../../types"
import Header from "../partials/Header";

const LayoutBasic: React.FC<LayoutType> = ({children}) => {
    return (
        <div className="content-wrapper">
            <Header /> {/* NavBar */}
            <main className="main">{children}</main> {/* Main */}
            <Footer /> {/* Footer */}
        </div>
    )
};

export default LayoutBasic;