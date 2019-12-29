import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils/testUtils";

import Header from "./Header";

// To optimize our test file we can collect all components in single place
const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

// We can describe set of tests using decribe method
describe('Header component', () => {
    let component;

    // Before each runs before every test
    beforeEach(() => {
        component = setUp();
    });

    // We can use both it or test method, they both are almost same
    it('Should render header without error', () => {
        const headerClass = findByTestAttr(component, 'headerComponent');
        expect(headerClass.length).toBe(1);
    });

    it('Should render logo without error', () => {
        const logoClass = findByTestAttr(component, 'logoIMG');
        expect(logoClass.length).toBe(1);
    });
});