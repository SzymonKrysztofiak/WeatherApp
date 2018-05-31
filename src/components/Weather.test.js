import Weather from "./Weather";
import CurrentTemp from "./CurrentTemp";
import Results from "./Results";
import Error from "./Error";

it("renders without crashing", () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper).toMatchSnapshot();
});

it("includes Results", () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper.containsMatchingElement(<Results />)).toEqual(true);
});
it("includes Error", () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper.containsMatchingElement(<Error />)).toEqual(true);
});
