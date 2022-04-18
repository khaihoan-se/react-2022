import React from "react";
import Image from "./Image";

interface LogoType {
    className?: string;
    src: string;
    alt: string;
}

const Logo: React.FC<LogoType> = ({className, src, alt }) => {
    return <Image className={className} src={src} alt={alt} />
}

export default Logo;