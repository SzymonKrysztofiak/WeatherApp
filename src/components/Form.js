import React from "react";
import api from "../api";

class Form extends React.Component {
    cityRef = React.createRef();

    getGeoCoords = () => {
        if (!navigator.geolocation) {
            const error = "Your browser doesn't support geolocation :(";
            this.props.addError(error);
        } else {
            navigator.geolocation.getCurrentPosition(
                this.geoSuccess,
                this.geoError
            );
        }
    };

    geoSuccess = position => {
        const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        this.props.addCoordsToState(coords);
    };

    geoError = () => {
        const error = `For some reason we can't read your location :( Check your geolocation settings, or network access.`;
        this.props.addError(error);
    };

    getCoords = async event => {
        event.preventDefault();
        this.props.toggleLoader();
        if (this.cityRef.current.value === "") {
            this.getGeoCoords();
        } else {
            const api_call = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${
                    this.cityRef.current.value
                }&key=${api.goog_key}`
            );
            const data = await api_call.json();
            if (data.status === "ZERO_RESULTS") {
                const error = "We don't have any data for this name :(";
                this.props.addError(error);
            } else {
                const coords = await {
                    lat: data.results[0].geometry.location.lat,
                    lng: data.results[0].geometry.location.lng
                };
                this.props.addCoordsToState(coords);
            }
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
                <button className="button form-button">Check</button>
            </form>
        );
    }
}

export default Form;
