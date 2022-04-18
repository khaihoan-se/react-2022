import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { LayoutType } from "../../types"

const LayoutBasic: React.FC<LayoutType> = ({children}) => {
    return (
        <div className="content-wrapper max-w-screen-2xl text-base mx-auto px-8 bg-slate-200">
            <Header /> {/* Header */}
            <main className="main">{children}</main> {/* Main */}
            <Footer /> {/* Footer */}
        </div>
    )
};

export default LayoutBasic;