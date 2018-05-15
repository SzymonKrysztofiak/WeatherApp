import React from "react";

const Error = props => (
    <div className="result-container__error">
        {props.errorMessage && (
            <p>
                <strong>{props.errorMessage}</strong>
            </p>
        )}
    </div>
);

export default Error;
