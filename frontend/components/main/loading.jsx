//ext
import React from "react";
//int - util
import * as icons from "../../utils/icons";

const Loading = () => {
    return (
        <React.Fragment>
            <div className="loading">
                {icons.loader1("svg-loader", "rgba(62, 156, 181, 0.6)")}
            </div>
        </React.Fragment>
    );
};

export default Loading;
