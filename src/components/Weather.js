import React from "react";

const Weather = props => (
    <div className="results-container">
        <div className="results-container__temp">
            {props.temperature && <p>{props.temperature}&deg;C</p>}
        </div>
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
            {props.error && (
                <p>
                    <strong>{props.error}</strong>
                </p>
            )}
        </div>
    </div>
);

export default Weather;
