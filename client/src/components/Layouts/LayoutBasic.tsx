import React from "react";
import Footer from "components/partials/Footer";
import { LayoutType } from "types"
import Header from "components/partials/Header";
import { useLocation } from "react-router-dom";

const LayoutBasic: React.FC<LayoutType> = ({children}) => {
    const router = useLocation()
    return (
        <div className="content-wrapper noselect">
            {
                router.pathname === '/login' ? null : <Header />
            }
            <main className="main">{children}</main> {/* Main */}
            {
                router.pathname === '/login' ? null : <Footer />
            }
        </div>
    )
};

export default LayoutBasic;