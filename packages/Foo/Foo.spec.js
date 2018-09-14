import React from 'react'
import Foo from './Foo'
import Enzyme from 'enzyme'
import 'jest-styled-components'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const { mount } = Enzyme

describe('Foo', () => {
    it('should render same as snapshot', () => {
        const tree = mount(<Foo />)

        expect(tree).toMatchSnapshot()
        expect(tree.find('div')).toBeDefined()
    })
})
