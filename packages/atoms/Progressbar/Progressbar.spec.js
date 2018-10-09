import React from 'react';
import { shallow } from 'enzyme';
import { slate } from '../themes/colors';
import Progressbar from './Progressbar';

describe('Progressbar', () => {
    it('should render a Progressbar component', () => {
        const wrapper = shallow(<Progressbar />);
        expect(wrapper).toHaveStyleRule('background', slate);
    });
    it('should render a Progressbar component with animation rules', () => {
        const wrapper = shallow(<Progressbar showAnimation />);
        expect(wrapper).toHaveStyleRule('background-size', '200% 100%');
    });
});
