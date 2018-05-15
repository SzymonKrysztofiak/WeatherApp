import React from "react";
import Loader from "./Loader";

const Weather = props => (
    <div className="results-container">
        {props.isLoaded ? null : <Loader />}
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
        </div>
        <div className="result-container__error">
            {props.errorMessage && (
                <p>
                    <strong>{props.errorMessage}</strong>
                </p>
            )}
        </div>
    </div>
);

export default Weather;
