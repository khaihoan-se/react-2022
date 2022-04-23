import React from "react";

interface ButtonTypeProps {
    title: string;
    className?: string;
}

const Button: React.FC<ButtonTypeProps> = (props) => {
    return (
        <button className={props.className}>{props.title}</button>
    )
}

export default Button;