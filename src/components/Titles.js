import React from "react";

const Titles = () => (
    <header className="title-container">
        <h1 className="text-center title-container__title">
            <span className="glyphicon glyphicon-cloud" aria-hidden="true" />{" "}
            WeatherApp
        </h1>
        <p className="text-center title-container__description">
            Check the weather! Just enter the city name, or leave empty for
            geolocation...
        </p>
    </header>
);

export default Titles;
