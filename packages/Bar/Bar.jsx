import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bar = ({ className, ...props }) => <Wrapper className={ className } { ...props } />

const Wrapper = styled.div`
    padding: 20px;
    background: brown;
    position: relative;
    font: 12px sans-serif;

    &::before {
        position: absolute;
        content: 'Bar';
        top: 2px;
        left: 2px;
        padding: 0.2em;
        background: rgba(255,255,255,0.8);
    }
`

Bar.propTypes = {
    className: PropTypes.string,
}

Bar.defaultProps = {
    className: '',
}

export default Bar
