import React from 'react';
import Label from '../lib/Label';
import renderer from 'react-test-renderer';

describe('Label', () => {
    it('should render a Label', () => {
        const tree = renderer.create(<Label>Label</Label>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
