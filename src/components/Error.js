import React from "react";
import PropTypes from "prop-types";

const Error = props => (
    <div className="result-container__error">
        {props.errorMessage && (
            <p>
                <strong>{props.errorMessage}</strong>
            </p>
        )}
    </div>
);

Error.propTypes = {
    errorMessage: PropTypes.string
};

export default Error;
