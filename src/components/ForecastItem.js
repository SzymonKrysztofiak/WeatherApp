import React from "react";
import PropTypes from "prop-types";

const ForecastItem = props => (
    <li className="details-list__item">
        <div>
            <strong>{props.time}:</strong>
        </div>
        <div>{props.temperature}&deg;C</div>
        <div>{props.description}</div>
    </li>
);
ForecastItem.propTypes = {
    time: PropTypes.string,
    temperature: PropTypes.number,
    description: PropTypes.string
};

export default ForecastItem;
