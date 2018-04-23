import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="country" placeholder="Kod kraju..." />
                <input type="text" name="city" placeholder="Miasto..." />
                <button>Sprawdź</button>
            </form>
        );
    }
};

export default Form;