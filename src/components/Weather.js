import React from "react";

const Weather = props => (
    <div className="results-container">
        {props.icon && props.city && props.country && <p><strong>Location: </strong>{props.city}, {props.country} <img className="results-icon" src={`http://openweathermap.org/img/w/${props.icon}.png`} /></p>}
        {props.temperature && <p><strong>Temperature: </strong>{props.temperature} &deg;C</p>}
        {props.description && <p><strong>Description: </strong>{props.description}</p>}
        {props.error && <p><strong>{props.error}</strong></p>}
    </div>
);

export default Weather;