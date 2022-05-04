import React from "react";
import { Link } from "react-router-dom";

interface LogoType {
    className?: string;
}

const Logo: React.FC<LogoType> = ({ className }) => {
    return (
        <div className={className}>
            <Link to='/' className="font-font-logo font-black text-sm md:text-base">KhaiHoan</Link>
        </div>
    )
}

export default Logo;