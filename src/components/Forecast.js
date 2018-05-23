import React from "react";
import ForecastItem from "./ForecastItem";
import PropTypes from "prop-types";

class Forecast extends React.Component {
    static propTypes = {
        forecast: PropTypes.array
    };

    render() {
        const output = this.props.forecast.reduce((day, obj) => {
            if (!day[obj.day]) {
                day[obj.day] = {
                    temperature: []
                };
            }
            day[obj.day].temperature.push(obj.temperature);
            return day;
        }, {});
        console.log(output);
        Object.keys(output);
        return (
            <ul className="list">
                {Object.keys(output).map((x, i) => <li key={i}>{x}</li>)}
            </ul>
        );
    }
}

export default Forecast;

// {this.props.forecast.map((item, index) => (
//     <ForecastItem
//         key={index}
//         date={item.date}
//         temp={item.temperature}
//         desc={item.description}
//     />
// ))}
