import React from 'react'
import { storiesOf } from '@storybook/react'
import { withState } from '@dump247/storybook-state'
import styled from 'styled-components'
import Toast, { ToastTitle, ToastParagraph } from './Toast'

const stories = storiesOf('Toast', module)

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100vh;
`

const FixedWidthWrapper = styled.div`
    width: 400px;
    display: grid;
    grid-gap: 2rem;
`

stories.addDecorator(story => (
    <Wrapper>{ story() }</Wrapper>
))

stories
    .add('Info', () => (
        <Toast variant="info">
            <ToastTitle>Success!</ToastTitle>
            <ToastParagraph>Process done</ToastParagraph>
        </Toast>
    ))
    .add('Warning', () => (
        <Toast variant="warning">
            <ToastTitle>Head up!</ToastTitle>
            <ToastParagraph>You haven&#39;t saved in a while</ToastParagraph>
        </Toast>
    ))
    .add('Error', () => (
        <Toast variant="error">
            <ToastTitle>Oh noes!</ToastTitle>
            <ToastParagraph>Something terrible has happened</ToastParagraph>
        </Toast>
    ))
    .add(
        'All variations in a wrapper with a fixed width and closehandler',
        withState({
            someId: { mounted: true },
            someOtherId: { mounted: true },
            yetAnotherId: { mounted: true },
        })(({ store }) => (
            <FixedWidthWrapper>
                {
                    store.state.someId.mounted && (
                        <Toast
                            variant="info"
                            { ...store.state.someId }
                            onClick={ () => {
                                store.set({ someId: { mounted: false } })
                            } } >
                            <ToastTitle>Success!</ToastTitle>
                            <ToastParagraph>Process done</ToastParagraph>
                        </Toast>
                    )
                }
                {
                    store.state.someOtherId.mounted && (
                        <Toast
                            variant="warning"
                            { ...store.state.someOtherId }
                            onClick={ () => {
                                store.set({ someOtherId: { mounted: false } })
                            } } >
                            <ToastTitle>Head up!</ToastTitle>
                            <ToastParagraph>You haven&#39;t saved in a while</ToastParagraph>
                        </Toast>
                    )
                }
                {
                    store.state.yetAnotherId.mounted && (
                        <Toast
                            variant="error"
                            { ...store.state.whatEverId }
                            onClick={ () => {
                                store.set({ yetAnotherId: { mounted: false } })
                            } } >
                            <ToastTitle>Oh noes!</ToastTitle>
                            <ToastParagraph>Something terrible has happened</ToastParagraph>
                        </Toast>
                    )
                }
            </FixedWidthWrapper>
        )),
    )
