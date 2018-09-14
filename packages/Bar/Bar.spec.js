import React from 'react'
import Bar from './Bar'
import Enzyme from 'enzyme'
import 'jest-styled-components'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const { mount } = Enzyme

describe('Bar', () => {
    it('should render same as snapshot', () => {
        const tree = mount(<Bar active={ false } />)

        expect(tree).toMatchSnapshot()
        expect(tree).toHaveStyleRule('color', 'gray')
    })
})
