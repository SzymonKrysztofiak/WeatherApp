import React from "react";

const Form = (props) => (
    <form className="form-group" onSubmit={props.getWeather}>
        <label htmlFor="city">City</label>
        <input className="form-control" id="city" type="text" name="city" placeholder="London, New York, Poznan..." />
        <label htmlFor="country">Country code</label>
        <input className="form-control" id="country" type="text" name="country" placeholder="UK, US, PL..." />
        <button className="btn btn-primary">Check</button>
    </form>
);

export default Form;