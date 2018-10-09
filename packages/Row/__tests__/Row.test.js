import React from 'react';
import Row from '../lib/Row';
import renderer from 'react-test-renderer';

describe('Row', () => {
    it('should render a Row', () => {
        const tree = renderer.create(<Row />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be a flexbox', () => {
        const tree = renderer.create(<Row />).toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
    });

    it('should wrap', () => {
        const tree = renderer.create(<Row />).toJSON();
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
    });
});
