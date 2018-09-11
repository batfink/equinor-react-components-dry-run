import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bar = ({ className, ...props }) => <Wrapper className={ className } { ...props } />

const Wrapper = styled.div`
    padding: 20px;
    background: violet;
`

Bar.propTypes = {
    className: PropTypes.string,
}

Bar.defaultProps = {
    className: '',
}

export default Bar
