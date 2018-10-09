import { configure, addDecorator } from '@storybook/react'
// import withInfo from '@storybook/addon-info'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: gray;
    }
`

// addDecorator(withInfo)

addDecorator( story => (
    <>
        <GlobalStyle />
        { story() }
    </>
))

const req = require.context('../packages', true, /\.stories\.jsx$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
