import React from "react";
import cities from "../cities";

class Form extends React.Component {
    cityRef = React.createRef();

    getGeoCoords = () => {
        navigator.geolocation.getCurrentPosition(this.geoSuccess, () => {
            console.log("Nie działa");
        });
    };

    geoSuccess = position => {
        const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        console.log(coords);
        this.props.addCoordsToState(coords);
    };

    getCoords = event => {
        event.preventDefault();
        console.log(this.cityRef.current.value);
        const city = cities.find(element => {
            return element.name === this.cityRef.current.value;
        });
        if (this.cityRef.current.value === "") {
            this.getGeoCoords();
        } else if (city) {
            const coords = {
                lat: city.lat,
                lng: city.lng
            };
            console.log(coords);
            this.props.addCoordsToState(coords);
        } else {
            console.log(`Pisz kurwa jak człowiek, poprawnie...`);
        }
    };

    render() {
        return (
            <form className="form-group" onSubmit={this.getCoords}>
                <label className="form-label" htmlFor="city">
                    City
                </label>
                <input
                    className="form-control"
                    id="city"
                    type="text"
                    name="city"
                    ref={this.cityRef}
                    placeholder="Enter a city name... e.g. London"
                />
                <button className="btn btn-primary form-button">Check</button>
            </form>
        );
    }
}

export default Form;
