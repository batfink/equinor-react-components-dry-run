import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Bar from '@equinor-internal/bar'

const Foo = ({ className, ...props }) =>
    (<Wrapper className={ className } { ...props }><Bar /></Wrapper>)

const Wrapper = styled.div`
    padding: 20px;
    background: violet;
    position: relative;
    font: 12px sans-serif;

    &::before {
        position: absolute;
        content: 'Foo';
        top: 2px;
        left: 2px;
        padding: 0.2em;
        background: rgba(255,255,255,0.8);
    }
`

Foo.propTypes = {
    className: PropTypes.string,
}

Foo.defaultProps = {
    className: '',
}

export default Foo
