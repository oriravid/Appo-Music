//ext
import React from "react";
//int - util
import * as icons from "../../utils/icons";

const Loading = () => {
    return (
        <React.Fragment>
            <div className="loading">
                {icons.loader1("svg-loader", "rgba(0,0,0,0.4)")}
                {icons.cloud("loading-cloud")}
            </div>
        </React.Fragment>
    );
};

export default Loading;
