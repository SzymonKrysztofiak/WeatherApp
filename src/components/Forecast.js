import React from "react";
import ForecastItem from "./ForecastItem";
import PropTypes from "prop-types";
import moment from "moment";

class Forecast extends React.Component {
    static propTypes = {
        forecast: PropTypes.array
    };

    render() {
        const output = this.props.forecast.reduce((day, obj) => {
            if (!day[obj.day]) {
                day[obj.day] = {
                    time: [],
                    temperature: [],
                    description: []
                };
            }
            day[obj.day].time.push(moment(obj.date * 1000).format("LT"));
            day[obj.day].temperature.push(obj.temperature);
            day[obj.day].description.push(obj.description);
            return day;
        }, {});
        console.log(output);
        return (
            <ul className="list">
                {Object.entries(output).map(([day, data], i) => (
                    <li key={i}>
                        <h2>{day}</h2>
                        <ul>
                            {data.time.map((x, i) => (
                                <li key={i}>
                                    {x}
                                    {data.temperature[i]}
                                    {data.description[i]}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Forecast;
