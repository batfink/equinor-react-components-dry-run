import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Foo = ({ className, ...props }) => <Wrapper className={ className } { ...props } />

const Wrapper = styled.div`
    padding: 20px;
    background: lime;
`

Foo.propTypes = {
    className: PropTypes.string,
}

Foo.defaultProps = {
    className: '',
}

export default Foo
