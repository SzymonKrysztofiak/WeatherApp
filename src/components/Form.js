import React from "react";
import api from "../api";

class Form extends React.Component {
    cityRef = React.createRef();

    getGeoCoords = () => {
        navigator.geolocation.getCurrentPosition(this.geoSuccess, () => {
            console.log(
                "Nie działa geo, bo masz kuffa wyłączone, albo przeglądarke z ery potato"
            );
        });
    };

    geoSuccess = position => {
        const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        // console.log(coords);
        this.props.addCoordsToState(coords);
    };

    getCoords = async event => {
        event.preventDefault();
        // console.log(this.cityRef.current.value);
        if (this.cityRef.current.value === "") {
            this.getGeoCoords();
        } else {
            const api_call = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${
                    this.cityRef.current.value
                }&key=${api.goog_key}`
            );
            // console.log(api_call);
            const data = await api_call.json();
            // console.log(data);
            const coords = await {
                lat: data.results[0].geometry.location.lat,
                lng: data.results[0].geometry.location.lng
            };
            // console.log(coords);
            this.props.addCoordsToState(coords);
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.getCoords}>
                <input
                    className="form-input"
                    type="text"
                    name="city"
                    ref={this.cityRef}
                    placeholder="London, Paris, Poznan..."
                />
                <button className="form-button">Check</button>
            </form>
        );
    }
}

export default Form;
