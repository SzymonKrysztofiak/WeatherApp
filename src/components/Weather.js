import React from "react";
import Loader from "./Loader";
import Error from "./Error";
import Results from "./Results";
import CurrentTemp from "./CurrentTemp";
import Forecast from "./Forecast";

class Weather extends React.Component {
    render() {
        return (
            <div>
                <div className="results-container">
                    {this.props.isLoaded ? null : <Loader />}
                    <CurrentTemp temperature={this.props.temperature} />
                    <Results
                        date={this.props.date}
                        city={this.props.city}
                        country={this.props.country}
                        description={this.props.description}
                    />
                    <Error errorMessage={this.props.errorMessage} />
                </div>
                {this.props.forecast ? (
                    <Forecast forecast={this.props.forecast} />
                ) : null}
            </div>
        );
    }
}

export default Weather;
