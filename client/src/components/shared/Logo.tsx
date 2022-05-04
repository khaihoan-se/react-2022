import React from "react";
import { Link } from "react-router-dom";

interface LogoType {
    className?: string;
}

const Logo: React.FC<LogoType> = ({ className }) => {
    return (
        <div className={className}>
            <Link to='/'>KhaiHoan</Link>
        </div>
    )
}

export default Logo;