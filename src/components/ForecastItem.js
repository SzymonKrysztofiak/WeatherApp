import React from "react";
import PropTypes from "prop-types";

const ForecastItem = props => {
    return (
        <li className="list-item">
            <div>
                <p>
                    <strong>{props.date}</strong>
                </p>
            </div>
            <div>
                <p>
                    <strong>Temperature:</strong> {props.temp}&deg;C
                </p>
            </div>
            <div>
                <p>
                    <strong>Description:</strong> {props.desc}
                </p>
            </div>
        </li>
    );
};

ForecastItem.propTypes = {
    date: PropTypes.string,
    temp: PropTypes.string,
    desc: PropTypes.string
};

export default ForecastItem;
