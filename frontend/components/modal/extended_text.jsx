// ext
import React from "react";
import { connect } from "react-redux";

const ExtendedText = ({ data }) => {
    return (
        <React.Fragment>
            <h1>{data.title}</h1>
            <h2>{data.sub}</h2>
            <p>{data.text}</p>
        </React.Fragment>
    );
};

const mapSTP = ({ ui: { modal } }) => ({
    data: modal.data,
});

export default connect(mapSTP)(ExtendedText);
