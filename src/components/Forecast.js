import React from "react";
import ForecastItem from "./ForecastItem";
import PropTypes from "prop-types";

const Forecast = props => {
    return (
        <ul className="list">
            {props.forecast.map((item, index) => (
                <ForecastItem
                    key={index}
                    date={item.date}
                    temp={item.temperature}
                    desc={item.description}
                />
            ))}
        </ul>
    );
};

Forecast.propTypes = {
    forecast: PropTypes.array
};

export default Forecast;
