import React from "react";
import moment from "moment";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import api from "./api";

class App extends React.Component {
    state = {
        coordis: {},
        date: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: undefined
    };

    addCoordsToState = coords => {
        const coordis = { ...this.state.coordis };
        coordis["coords"] = coords;
        this.setState({
            coordis
        });
        // console.log(this.state.coordis);
        this.updateState();
    };

    updateState = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${
                this.state.coordis.coords.lat
            }&lon=${this.state.coordis.coords.lng}&appid=${
                api.key
            }&units=metric`
        )
            .then(res => {
                return res.json();
            })
            .then(data => {
                const newDate = moment(data.dt * 1000).format("l LT");
                this.setState({
                    temperature: data.main.temp,
                    date: newDate,
                    city: data.name,
                    country: data.sys.country,
                    description: data.weather[0].description,
                    error: ""
                });
            });
    };

    render() {
        return (
            <div>
                <div className="bg-container" />
                <div className="flex-container">
                    <Titles />
                    <Form addCoordsToState={this.addCoordsToState} />
                    <Weather
                        temperature={this.state.temperature}
                        date={this.state.date}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description}
                        error={this.state.error}
                    />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
