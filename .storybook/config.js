import { configure, addDecorator } from '@storybook/react'
import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: gray;
    }
`

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
