import React from "react";
import ForecastItem from "./ForecastItem";

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

export default Forecast;
