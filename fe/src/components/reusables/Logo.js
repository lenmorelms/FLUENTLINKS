import React from "react";
import Image from "./Image";

const Logo = ({textColor, height, textSise}) => {
    return (
        <div lassName="logo-container">
        <span>
        <Image
            src="./link.png"
            height={height}
        />
        </span>
        <span className="logo-text" style={{ color: textColor, fontSize: textSise }}>FluentLinks</span>
        </div>
    )
};

export default Logo;