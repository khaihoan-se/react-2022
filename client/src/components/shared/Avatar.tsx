import React from "react";
import Image from "./Image";

interface AvatarProps {
    src: string;
    alt: string;
    className?: string;
}
const Avatar: React.FC<AvatarProps> = ({ src, alt, className }) => {
    return <Image src={src} alt={alt} className={className} />
}

export default Avatar;