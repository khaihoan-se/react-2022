import React, { useState, useEffect } from "react";
import Footer from "components/partials/Footer";
import { LayoutType } from "types"
import Header from "components/partials/Header";
import { useLocation } from "react-router-dom";
import LayoutMobile from "./LayoutMobile";

const LayoutBasic: React.FC<LayoutType> = ({children}) => {
    const router = useLocation()
    const [ screen, setScreen ] = useState(false)
    useEffect(() => {
        const handleScreen = () => {
            setScreen(window.innerWidth < 976)
        }
        window.addEventListener('resize', handleScreen)
    }, []);
    return screen ? <LayoutMobile /> 
    :   <>
            {
                router.pathname === '/login' ? null : <Header />
            }
            <main className="main">{children}</main> {/* Main */}
            {
               router.pathname === '/login' ? null : <Footer />
            }
        </>
};

export default LayoutBasic;