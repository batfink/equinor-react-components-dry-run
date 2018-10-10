import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { moss } from './colors'
import Label from '@equinor/react-label'
import Progressbar from './Progressbar'

const stories = storiesOf('Progressbar', module)

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100vh;
`

const SmallLabel = styled.span`
    font-size: 0.875rem;
`

stories.addDecorator(story => (
    <Wrapper>{ story() }</Wrapper>
))

stories
    .add('Default', () => (
        <Label style={ { width: '400px' } }>
            <SmallLabel>Syncronizing data…</SmallLabel>
            <Progressbar />
        </Label>
    ))
    .add('Animation', () => (
        <Label style={ { width: '400px' } }>
            <SmallLabel>Syncronizing data…</SmallLabel>
            <Progressbar showAnimation />
        </Label>
    ))
