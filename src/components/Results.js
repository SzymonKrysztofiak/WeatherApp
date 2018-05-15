import React from "react";

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

export default Results;
