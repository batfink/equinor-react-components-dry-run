import { configure, addDecorator } from '@storybook/react'
import React from 'react'

const req = require.context('../packages', true, /\.stories\.jsx$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
