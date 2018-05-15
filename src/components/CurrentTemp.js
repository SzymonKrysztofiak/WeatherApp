import React from "react";

const CurrentTemp = props => (
    <div className="results-container__temp">
        {props.temperature && <p>{props.temperature}&deg;C</p>}
    </div>
);

export default CurrentTemp;
