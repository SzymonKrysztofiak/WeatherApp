import React from "react";
import Loader from "./Loader";
import Error from "./Error";
import Results from "./Results";
import CurrentTemp from "./CurrentTemp";

const Weather = props => (
    <div>
        <div className="results-container">
            {props.isLoaded ? null : <Loader />}
            <CurrentTemp temperature={props.temperature} />
            <Results
                date={props.date}
                city={props.city}
                country={props.country}
                description={props.description}
            />
            <Error errorMessage={props.errorMessage} />
        </div>
    </div>
);

export default Weather;
