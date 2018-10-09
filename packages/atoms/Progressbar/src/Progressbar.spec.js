import chai from 'chai'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import 'styled-components-test-utils/lib/chai'

import { slate } from '../themes/colors'

import Progressbar from './Progressbar'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

const { shallow } = Enzyme
const { expect } = chai

describe('Progressbar', () => {
    it('should render a Progressbar component', () => {
        const wrapper = shallow(<Progressbar />)
        expect(wrapper).toHaveStyleRule('background', slate)
    })
    it('should render a Progressbar component with animation rules', () => {
        const wrapper = shallow(<Progressbar showAnimation />)
        expect(wrapper).toHaveStyleRule('background-size', '200% 100%')
    })
})
