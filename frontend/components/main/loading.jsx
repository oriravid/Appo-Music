//ext
import React from "react";
//int - util
import * as icons from "../../utils/icons";

const Loading = () => {
    return (
        <React.Fragment>
            <div className="loading">
                {icons.loader1("svg-loader", "#999999")}
            </div>
        </React.Fragment>
    );
};

export default Loading;
