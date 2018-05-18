import React from "react";
import ForecastItem from "./ForecastItem";

class Forecast extends React.Component {
    render() {
        return (
            <ul className="list">
                {this.props.forecast.map((item, index) => (
                    <ForecastItem
                        key={index}
                        date={item.date}
                        temp={item.temperature}
                        desc={item.description}
                    />
                ))}
            </ul>
        );
    }
}

export default Forecast;
