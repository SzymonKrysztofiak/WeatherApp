import ReactDOM from "react-dom";
import App from "./App";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});

it("includes Titles", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Titles />)).toEqual(true);
});

it("includes Form", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Form />)).toEqual(true);
});

it("includes Weather", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Weather />)).toEqual(true);
});

it("includes Footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
});
