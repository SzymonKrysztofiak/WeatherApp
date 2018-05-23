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
        current: {
            date: undefined,
            temperature: undefined,
            city: undefined,
            country: undefined,
            description: undefined
        },
        forecast: [],
        errorMessage: "",
        isLoaded: true
    };

    addCoordsToState = coords => {
        const coordis = { ...this.state.coordis };
        coordis["coords"] = coords;
        this.setState({
            coordis
        });
        this.updateWeatherState();
        this.forecastState();
    };

    toggleLoader = () => {
        this.setState(state => ({ isLoaded: !state.isLoaded }));
    };

    addError = error => {
        const errorMessage = { ...this.state.errorMessage };
        errorMessage["error"] = error;
        this.setState({
            coordis: {},
            current: {
                date: undefined,
                temperature: undefined,
                city: undefined,
                country: undefined,
                description: undefined
            },
            errorMessage: errorMessage
        });
        this.toggleLoader();
    };

    updateWeatherState = () => {
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
                    current: {
                        temperature: data.main.temp,
                        date: newDate,
                        city: data.name,
                        country: data.sys.country,
                        description: data.weather[0].description
                    },
                    errorMessage: ""
                });
            });
        this.toggleLoader();
    };

    // Nowy bajer do opierdolenia
    forecastState = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${
                this.state.coordis.coords.lat
            }&lon=${this.state.coordis.coords.lng}&appid=${
                api.key
            }&units=metric`
        )
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    forecast: data.list.map(item => {
                        return {
                            temperature: item.main.temp,
                            date: item.dt,
                            day: moment(item.dt * 1000).format("dddd"),
                            description: item.weather[0].description
                        };
                    })
                });
            });
    };

    render() {
        return (
            <React.Fragment>
                <div className="bg-container" />
                <div className="flex-container">
                    <Titles />
                    <Form
                        addCoordsToState={this.addCoordsToState}
                        addError={this.addError}
                        toggleLoader={this.toggleLoader}
                    />
                    <Weather
                        temperature={this.state.current.temperature}
                        date={this.state.current.date}
                        city={this.state.current.city}
                        country={this.state.current.country}
                        description={this.state.current.description}
                        errorMessage={this.state.errorMessage.error}
                        isLoaded={this.state.isLoaded}
                        forecast={this.state.forecast}
                    />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
