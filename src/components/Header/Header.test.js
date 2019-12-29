import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

// We can describe set of tests using decribe method
describe('Header component', ()=>{
    // We can use both it or test method, they both are almost same
    it('Should render header without error', () => {
        const headerComponent = shallow(<Header />);
        const headerClass = headerComponent.find('.headerComponent')
        expect(headerClass.length).toBe(1);
    });

    it('Should render logo without error', ()=>{
        const headerComponent = shallow(<Header />);
        const logoClass = headerComponent.find('.logoIMG')
        expect(logoClass.length).toBe(1);
    });
});