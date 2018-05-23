import React from "react";
import PropTypes from "prop-types";

const CurrentTemp = props => (
    <div className="results-container__temp">
        {props.temperature && <p>{props.temperature}&deg;C</p>}
    </div>
);

CurrentTemp.propTypes = {
    temperature: PropTypes.string
};

export default CurrentTemp;
