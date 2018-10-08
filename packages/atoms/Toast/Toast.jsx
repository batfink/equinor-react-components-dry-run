import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { hsl, tint } from 'polished'
import { moss, heritage, energy, lichen, colors } from './colors'

const tango = { hue: 26, saturation: 0.85, lightness: 0.44 }
const tangoSaturated = { ...tango, saturation: 1 }
const tangoSaturatedLight = { ...tangoSaturated, lightness: 0.7 }
const tangoSaturatedLighter = { ...tangoSaturated, lightness: 0.9 }

const backgroundColor = ({ variant }) => ({
    info: moss,
    warning: hsl(tango),
    error: heritage,
}[variant])

const strokeColor = ({ variant }) => ({
    info: hsl({ ...colors.moss, lightness: 0.34 }),
    warning: hsl(tangoSaturatedLight),
    error: hsl({ ...colors.energy, saturation: 0.6 }),
}[variant])

const textColor = ({ variant }) => ({
    info: lichen,
    warning: hsl(tangoSaturatedLighter),
    error: tint(0.2, energy),
}[variant])

const Wrapper = styled.div`
    padding: 1.5rem;
    background: ${backgroundColor};
    color: ${textColor};
    border: 1px solid ${strokeColor};
    border-radius: 5px;
    position: relative;
    display: grid;
    grid-gap: 0.5rem;
`

const Button = styled.button`
    color: inherit;
    position: absolute;
    right: 10px;
    top: 10px;
`

/*
 * Main component
 */

const Toast = ({ className, style, children, variant, onClick }) => (
    <Wrapper className={ className } style={ style } variant={ variant }>
        <Button onClick={ onClick }>
        </Button>
        { children }
    </Wrapper>
)

Toast.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['error', 'warning', 'info']),
    onClick: PropTypes.func,
}

Toast.defaultProps = {
    className: '',
    style: {},
    children: [],
    onClick: () => {},
    variant: 'info',
}

/*
 * Title component
 */

const ToastTitle = styled.h2`
    text-transform: uppercase;
    margin: 0;
    font-size: 1.25rem;
`

/*
 * Title component
 */

const ToastParagraph = styled.p`
    margin: 0;
    font-size: 1.125rem;
`

/*
 * Exports
 */

export default Toast

export {
    ToastTitle,
    ToastParagraph,
}
