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
        return (
            <ul className="list">
                {Object.entries(output).map(([day, data]) => (
                    <li key={day} className="list-item">
                        <h2>{day}</h2>
                        <ul className="details-list">
                            {data.time.map((x, i) => (
                                <ForecastItem
                                    key={i}
                                    time={x}
                                    temperature={data.temperature[i]}
                                    description={data.description[i]}
                                />
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Forecast;
