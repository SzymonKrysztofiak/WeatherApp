import React from "react";
import PropTypes from "prop-types";

const Results = props => (
    <div className="results-container__rest">
        {props.date && (
            <p>
                <strong>Date: </strong>
                {props.date}
            </p>
        )}
        {props.city &&
            props.country && (
                <p>
                    <strong>Location: </strong>
                    {props.city}, {props.country}
                </p>
            )}
        {props.description && (
            <p>
                <strong>Description: </strong>
                {props.description}
            </p>
        )}
    </div>
);

Results.propTypes = {
    date: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string
};

export default Results;
