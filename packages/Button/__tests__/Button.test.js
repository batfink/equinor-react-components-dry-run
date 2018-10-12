import React from 'react';
import Button from '../lib/Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
    it('should render a default Button', () => {
        const tree = renderer.create(<Button />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a primary Button', () => {
        const tree = renderer.create(<Button varient="primary" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
