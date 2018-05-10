import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import api from "./api";

class App extends React.Component {
    state = {
        coordis: {},
        icon: undefined,
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
        console.log(this.state.coordis);
        this.updateState();
    };

    getWeather = () => {};
    // this.getWeather();

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
                this.setState({
                    icon: data.weather[0].icon,
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    description: data.weather[0].description,
                    error: ""
                });
            });
    };

    render() {
        return (
            <div className="container">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div className="app-wrapper">
                        <Titles />
                        <main className="main">
                            <section className="form-container">
                                <Form
                                    addCoordsToState={this.addCoordsToState}
                                />
                                <Weather
                                    icon={this.state.icon}
                                    temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    description={this.state.description}
                                    error={this.state.error}
                                />
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
