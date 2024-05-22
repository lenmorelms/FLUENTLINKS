import React from "react";

const Image = ({src, color, alt, width, height, className}) => {
    return (
        <>
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{ color: color }}
            className={className}
        />
        </>
    )
};

export default Image;