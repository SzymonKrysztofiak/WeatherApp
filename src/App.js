import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "dbcd93b4e2fe2814afa13caac19f0cc5";

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if(city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                description: undefined,
                error: "Please enter the values."
            });
        }
    }
    render() {
        return (
            <main className="main">
                <div className="container">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <Titles />
                        <Form getWeather={this.getWeather} />
                        <Weather 
                            temperature={this.state.temperature} 
                            city={this.state.city} 
                            country={this.state.country} 
                            description={this.state.description} 
                            error={this.state.error} 
                        />
                    </div>
                </div>
            </main>
        );
    }
};

export default App;