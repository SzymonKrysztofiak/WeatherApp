import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "dbcd93b4e2fe2814afa13caac19f0cc5";

class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
    }
    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather />
            </div>
        );
    }
};

export default App;