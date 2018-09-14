import React from 'react'
import Bar from './Bar'
import Enzyme from 'enzyme'
import 'jest-styled-components'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const { shallow } = Enzyme

describe('Bar', () => {
    it('should render same as snapshot', () => {
        const tree = shallow(<Bar />)

        expect(tree).toMatchSnapshot()
    })
})
