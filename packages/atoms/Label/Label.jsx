import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mist } from '../../themes/colors'

const Label = styled.label`
    display: grid;
    grid-gap: 0.25rem;
    color: ${mist};
    font-weight: 500;
    font-size: 1.125rem;
 `

export default Label
