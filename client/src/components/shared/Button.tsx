import React from "react";
import { Buttons } from "styles/GlobalStyles"
interface ButtonTypeProps {
    title: string;
    icon?: any;
    onClick?: () => void;
}

const Button: React.FC<ButtonTypeProps> = ({ title, icon, onClick}) => {
    return (
        <Buttons onClick={onClick}>
            {title}
            {icon}
        </Buttons>
    )
}

export default Button;