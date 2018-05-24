import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastItem = props => {
    return <li className="list-item" />;
};

ForecastItem.propTypes = {
    date: PropTypes.number,
    temp: PropTypes.number,
    desc: PropTypes.string
};

export default ForecastItem;
