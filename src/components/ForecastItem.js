import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastItem = props => {
    return (
        <li className="list-item">
            <div>
                <p>
                    <strong>
                        {moment(props.date * 1000).format("dddd LT")}
                    </strong>
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
    date: PropTypes.number,
    temp: PropTypes.number,
    desc: PropTypes.string
};

export default ForecastItem;
