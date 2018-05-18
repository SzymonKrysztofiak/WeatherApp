import React from "react";

const ForecastItem = props => {
    return (
        <li className="list-item">
            <div>{props.date} -</div>
            <div>{props.temp}&deg;C -</div>
            <div>{props.desc}</div>
        </li>
    );
};

export default ForecastItem;
