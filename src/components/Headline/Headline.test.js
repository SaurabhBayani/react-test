import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils/testUtils";

import Headline from "./Headline";

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe("Headline Component", () => {

    describe("Have props", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it("Should render without error", () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });

        it("Should render h1 without error", () => {
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        });

        it("Should render desc without error", () => {
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(1);
        });
    });

    describe("Have No Props", () => {
        beforeEach(() => {
            wrapper = setUp();
        });

        it("Should not render", ()) => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        }
    });
});