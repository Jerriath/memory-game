import "./componentStyles.css";
import Loader from "react-loader-spinner";
import React from "react";


export const LoadingScreen = () => {

    return (
        <div id="loadingScreen" className="loadingScreen">
            <div className="loaderHolder">
                <Loader
                    type="Circles"
                    color="rgb(26, 75, 34)"
                    height={100}
                    width={100}
                />
            </div>
        </div>
    );
}

export default LoadingScreen;