import React from 'react';
import { slate } from '../../themes/colors';
import ProgressBar from '../lib/ProgressBar';
import renderer from 'react-test-renderer';

describe('ProgressBar', () => {
    it('should render a ProgressBar', () => {
        const tree = renderer.create(<ProgressBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a ProgressBar with animation', () => {
        const tree = renderer.create(<ProgressBar showAnimation />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have background slate', () => {
        const tree = renderer.create(<ProgressBar />).toJSON();
        expect(tree).toHaveStyleRule('background', slate);
    });

    it('should have background-size 200% 100% when animated', () => {
        const tree = renderer.create(<ProgressBar showAnimation />).toJSON();
        expect(tree).toHaveStyleRule('background-size', '200% 100%');
    });
});
