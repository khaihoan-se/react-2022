import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { LayoutType } from "../../types"

const LayoutBasic: React.FC<LayoutType> = ({children}) => {
    return (
        <div className="content-wrapper">
            <Header /> {/* Header */}
            <main className="main">{children}</main> {/* Main */}
            <Footer /> {/* Footer */}
        </div>
    )
};

export default LayoutBasic;