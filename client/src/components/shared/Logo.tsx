import React from "react";
import { Link } from "react-router-dom";
import { LogoDiv } from "GlobalStyles";

const Logo = () => {
    return (
        <LogoDiv>
            <Link to="/">KhaiHoan</Link>
        </LogoDiv>
    )
}

export default Logo;