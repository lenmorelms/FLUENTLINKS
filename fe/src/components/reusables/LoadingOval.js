import React from "react";
import { Oval } from "react-loader-spinner";

const LoadingOval = ({color}) => {
    return(
        <Oval
            visible={true}
            height="50"
            width="50"
            color={color}
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
  />
    )
};

export default LoadingOval