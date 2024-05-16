import React from "react";
import { ThreeDots } from "react-loader-spinner";

const LoadingDots = ({color}) => {
    return(
        <ThreeDots
            visible={true}
            height="30"
            width="80"
            color={color}
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
};

export default LoadingDots