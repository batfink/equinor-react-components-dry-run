import React from 'react'
import Foo from './Foo'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('Foo', () => {
    it('should render same as snapshot', () => {
        const tree = renderer.create(<Foo />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
