import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { createGlobalStyle } from 'styled-components'
import { energy, moss } from './colors'
import Label from './Label'

const stories = storiesOf('Label', module)

/* eslint-disable no-unused-expressions */
const GlobalStyle = createGlobalStyle`
    .energy {
        color: ${energy};
    }
`

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100vh;
`

stories.addDecorator(story => (
    <Wrapper>
        <GlobalStyle />
        { story() }
    </Wrapper>
))

stories
    .add('Default', () => (
        <Label>Some label</Label>
    ))
    .add('With className', () => (
        <Label className="energy">Some label</Label>
    ))
    .add('With style', () => (
        <Label style={ { color: moss } }>Some label</Label>
    ))
