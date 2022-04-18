import React from "react";
import { ImageType } from "../../types"

const Image: React.FC<ImageType> = ({ className, src, alt}) => {
    return <img className={className} src={src} alt={alt} />
}

export default Image;