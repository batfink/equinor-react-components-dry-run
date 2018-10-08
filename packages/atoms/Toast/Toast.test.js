import chai from 'chai'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import 'styled-components-test-utils/lib/chai'

import Toast, { ToastTitle, ToastParagraph } from './Toast'

Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

const { shallow, mount } = Enzyme
const { expect } = chai

describe('Toast', () => {
    it('should render a Toast component', () => {
        const wrapper = shallow(<Toast />)
        expect(wrapper.find('Wrapper').length).to.be.equal(1)
        expect(wrapper.find('Button').length).to.be.equal(1)
    })
    it('should render a ToastTitle component', () => {
        const wrapper = shallow(<ToastTitle />)
        expect(wrapper).toHaveStyleRule('font-size', '1.25rem')
    })
    it('should render a ToastParagraph component', () => {
        const wrapper = shallow(<ToastParagraph />)
        expect(wrapper).toHaveStyleRule('font-size', '1.125rem')
    })
})
