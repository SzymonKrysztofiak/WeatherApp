import React from "react";

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

export default ForecastItem;
